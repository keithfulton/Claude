# Procedural 120 BPM soundtrack, sample-locked to the video's event timeline.
import numpy as np, wave, sys
SR = 48000; DUR = 18.0; N = int(SR * DUR)
rng = np.random.default_rng(7)
L = np.zeros(N); R = np.zeros(N); SEND = np.zeros(N)

def at(t): return int(round(t * SR))
def add(sig, t, g=1.0, pan=0.0, rev=0.0):
    i = at(t)
    if i >= N or i + len(sig) <= 0: return
    j = min(N, i + len(sig)); s = sig[:j - i] * g
    L[i:j] += s * np.sqrt((1 - pan) / 2) * 1.414; R[i:j] += s * np.sqrt((1 + pan) / 2) * 1.414
    SEND[i:j] += s * rev
def tt(n): return np.arange(n) / SR
def filt(x, lo=None, hi=None, order=4):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); Hh = np.ones_like(f)
    if hi: Hh /= np.sqrt(1 + (f / hi) ** order)
    if lo: Hh /= np.sqrt(1 + (lo / np.maximum(f, 1e-3)) ** order)
    return np.fft.irfft(X * Hh, n=len(x))
def mtof(m): return 440 * 2 ** ((m - 69) / 12)
def saw(f, n, phase=0.0, kmax=40):
    t = tt(n); s = np.zeros(n); K = int(max(1, min(kmax, 15000 / f)))
    for k in range(1, K + 1): s += np.sin(2 * np.pi * k * f * t + k * phase) / k
    return s * 0.55
def adsr(n, a=.01, r=.1):
    e = np.ones(n); na = max(1, int(a * SR)); nr = max(1, int(r * SR))
    e[:na] = np.linspace(0, 1, na); e[-nr:] *= np.linspace(1, 0, nr); return e

# ---------------- drums ----------------
def kick():
    n = int(.5 * SR); t = tt(n); f = 44 + 120 * np.exp(-t * 30)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 6.5)
    s += filt(rng.standard_normal(n), lo=2000) * np.exp(-t * 400) * .5
    return np.tanh(s * 1.8) * .9
def clap():
    n = int(.35 * SR); t = tt(n); e = np.zeros(n)
    for d in (0, .010, .021): e += np.where(t >= d, np.exp(-(t - d) * 140), 0) * .7
    e += np.where(t >= .03, np.exp(-(t - .03) * 16), 0)
    return filt(rng.standard_normal(n), lo=1000, hi=5000) * e * .8
def hat(open_=False):
    n = int((.3 if open_ else .07) * SR); t = tt(n)
    return filt(rng.standard_normal(n), lo=7500) * np.exp(-t * (9 if open_ else 70)) * .35
def snare():
    n = int(.25 * SR); t = tt(n)
    return (filt(rng.standard_normal(n), lo=1500, hi=8000) * np.exp(-t * 22) * .6 + np.sin(2 * np.pi * 190 * t) * np.exp(-t * 30) * .4)

K, CL, HC, HO, SN = kick(), clap(), hat(), hat(True), snare()
kicks = []
for b in range(4, 28):                      # beats 2.0 .. 13.5  (bars 1-6)
    t = b * .5; add(K, t, .95); kicks.append(t)
    if b % 2 == 1: add(CL, t, .55, rev=.25)
    add(HC, t + .25, .5, pan=.3)
    if b >= 12: add(HC, t + .125, .22, pan=-.3); add(HC, t + .375, .22, pan=-.3)
    if b % 4 == 3: add(HO, t + .25, .35, pan=.2)
add(K, 16.0, 1.1); kicks.append(16.0)
# breakdown snare roll 15.0 -> 16.0 accelerating
tr = 15.0; step = .125
while tr < 15.97:
    g = .15 + .45 * (tr - 15) ; add(SN, tr, g, pan=.1 * np.sin(tr * 9), rev=.2); tr += step
    if tr >= 15.5: step = .0625
    if tr >= 15.75: step = .03125

# sidechain envelope from kicks
sc = np.ones(N); tn = tt(N)
for k in kicks:
    i = at(k); seg = tn[i:] - k; sc[i:] = np.minimum(sc[i:], 1 - .7 * np.exp(-seg / .11))

# ---------------- harmony ----------------
CH = {'Am': [57, 60, 64, 69], 'F': [57, 60, 65, 69], 'C': [55, 60, 64, 67], 'G': [55, 59, 62, 67], 'Cf': [48, 55, 60, 64, 67, 72]}
BASS = {'Am': 45, 'F': 41, 'C': 48, 'G': 43}
PROG = ['Am', 'Am', 'F', 'C', 'G', 'Am', 'F', 'G']   # bars 0..7, bar 8 = final C
pad_L = np.zeros(N); pad_R = np.zeros(N); bus = np.zeros(N); arpL = np.zeros(N); arpR = np.zeros(N)
for b, ch in enumerate(PROG):
    t0 = 2 * b; n = int(2.08 * SR)
    for m in CH[ch]:
        f = mtof(m)
        for dt, side in ((-.007, 0), (.0, 2), (.007, 1)):
            s = saw(f * (1 + dt), n, phase=rng.random() * 6, kmax=24) * adsr(n, .04, .12)
            i = at(t0); j = min(N, i + n)
            if side in (0, 2): pad_L[i:j] += s[:j - i]
            if side in (1, 2): pad_R[i:j] += s[:j - i]
    if 1 <= b <= 6:                               # offbeat bass + sub (house pump)
        f = mtof(BASS[ch]); nb = int(.2 * SR)
        s = (saw(f, nb, kmax=30) * .8 + np.sin(2 * np.pi * f / 2 * tt(nb)) * .7) * adsr(nb, .005, .06)
        for j in range(4):
            for off, g in ((.25, 1.0), (.375, .55)):
                i = at(t0 + j * .5 + off); k2 = min(N, i + nb); bus[i:k2] += s[:k2 - i] * g
    # plucked arp: 8ths in bars 1-2, 16ths in 3-6, filtered 16ths in breakdown 7
    if b >= 1:
        notes = CH[ch] + [CH[ch][1] + 12, CH[ch][2] + 12]; pat = [0, 2, 4, 1, 3, 5, 2, 4]
        stepd = .25 if b <= 2 else .125
        for k in range(int(2 / stepd)):
            m = notes[pat[k % 8]] + 12; f = mtof(m); nn = int(.3 * SR); t = tt(nn)
            s = np.zeros(nn)
            for h in range(1, 12): s += np.sin(2 * np.pi * h * f * t) / h * np.exp(-t * (10 + h * 5))
            g = .13 if b < 7 else .07 + .05 * k / 16
            i = at(t0 + k * stepd); j = min(N, i + nn)
            (arpL if k % 2 else arpR)[i:j] += s[:j - i] * g
            (arpR if k % 2 else arpL)[i:j] += s[:j - i] * g * .35
# final chord (bar 8): big stab + long tail
n = int(2.0 * SR)
for m in CH['Cf']:
    f = mtof(m)
    for dt in (-.006, 0, .006):
        s = saw(f * (1 + dt), n, phase=rng.random() * 6, kmax=30) * np.exp(-tt(n) * 1.3) * adsr(n, .003, .3)
        i = at(16.0); pad_L[i:] += s[:N - i] * (1.2 if dt <= 0 else .6); pad_R[i:] += s[:N - i] * (1.2 if dt >= 0 else .6)
nb = int(1.8 * SR); s = np.sin(2 * np.pi * mtof(36) * tt(nb)) * np.exp(-tt(nb) * 2) * 1.1; bus[at(16.0):at(16.0) + nb] += s[:N - at(16.0)]

# filter pads: dark intro opening up, bright mid, filtered breakdown
pad_L = filt(pad_L, lo=120, hi=2600); pad_R = filt(pad_R, lo=120, hi=2600)
swell = np.clip(tn / 2.0, 0, 1) ** 2 * .6 + .4
padg = np.where(tn < 2, swell * .9, np.where((tn >= 14) & (tn < 16), 1.1, .75))
pad_L *= padg * sc * .16; pad_R *= padg * sc * .16
bus = filt(bus, hi=900) * sc * .5
L += pad_L + bus + arpL; R += pad_R + bus + arpR
SEND += (pad_L + pad_R) * .3 + (arpL + arpR) * .5

# ---------------- transition FX ----------------
def whoosh(d=.5, up=True):
    n = int(d * SR); t = tt(n); x = rng.standard_normal(n); y = np.zeros(n); z = 0.0
    fc = (np.linspace(300, 7000, n) if up else np.linspace(7000, 300, n)) ** 1.0
    a = 1 - np.exp(-2 * np.pi * fc / SR)
    for i in range(n): z += a[i] * (x[i] - z); y[i] = z
    env = np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2 * (t / d) ** .6
    return (y - filt(y, hi=250)) * env * 1.4
def impact(big=1.0):
    n = int(1.6 * SR); t = tt(n); f = 32 + 70 * np.exp(-t * 9)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 3.2) * 1.0
    s += filt(rng.standard_normal(n), hi=3500) * np.exp(-t * 11) * .45
    return np.tanh(s * 1.4 * big) * .8
def riser(d, f0=180, f1=1400):
    n = int(d * SR); t = tt(n); ph = 2 * np.pi * np.cumsum(np.geomspace(f0, f1, n)) / SR
    s = (np.sin(ph) + .5 * np.sin(ph * 1.5)) * (t / d) ** 2 * .22
    s += filt(rng.standard_normal(n), lo=2500) * (t / d) ** 3 * .35
    return s
def tick(f=2600, d=.04, g=1.0):
    n = int(d * SR); t = tt(n); return np.sin(2 * np.pi * f * t) * np.exp(-t * 90) * g
def blip(f=880, d=.18):
    n = int(d * SR); t = tt(n); return (np.sin(2 * np.pi * f * t) + .3 * np.sin(4 * np.pi * f * t)) * np.exp(-t * 22) * .5
def shimmer(d=1.2):
    n = int(d * SR); t = tt(n); s = np.zeros(n)
    for m in (84, 88, 91, 96, 100):
        s += np.sin(2 * np.pi * mtof(m) * t + rng.random() * 6) * np.exp(-t * 3) * (1 - np.exp(-t * 60))
    return s * .07

for T in (2, 4, 6, 8, 10, 12, 14, 16):
    add(whoosh(.5), T - .45, .5 if T not in (14, 16) else .6, pan=-.4, rev=.2)
    add(whoosh(.35, up=False), T + .02, .25, pan=.4)
    add(impact(1.25 if T in (2, 16) else .9), T, .7 if T not in (2, 16) else .95, rev=.35)
add(riser(2.0, 120, 1000), 0.0, .9, rev=.3)                   # intro: particles converge
add(shimmer(1.4), 1.3, 1.0, rev=.6)                           # mark forms
add(riser(1.0, 250, 1800), 15.0, .9, rev=.3)                  # breakdown build
add(shimmer(2.0), 16.7, .9, pan=.2, rev=.7)                   # logo + shine
for t, f in ((2.12, 1320), (2.5, 1480), (3.0, 1760), (3.45, 990)): add(blip(f), t, .5, pan=-.2, rev=.3)  # kinetic words
add(blip(660, .3), 4.2, .6, rev=.3); add(blip(990), 4.55, .3)                                          # pin drop
for k in range(22): add(tick(2200 + k * 40, .03, .35), 4.75 + k * .035, pan=.3)                         # $35 / 60 mi counters
for t in (6.7, 6.95): add(blip(1175), t, .4, pan=.3, rev=.3)                                            # spec tags
for i, t in enumerate((7.1, 7.25, 7.4)): add(blip(1568 + 200 * i, .12), t, .45, rev=.2)                 # check marks
v_prev = 6
for i in range(1, 91):                                         # 6 -> 200 counter: tick per 4 guests
    tl = .35 + .9 * i / 90; p = tl
    x = (p - .35) / .9; e = 4 * x ** 3 if x < .5 else 1 - (-2 * x + 2) ** 3 / 2; v = 6 + 194 * e
    if v - v_prev >= 4: add(tick(3000, .02, .3), 8 + tl, pan=.25 * np.sin(i)); v_prev = v
add(blip(523, .35), 9.25, .5, rev=.4)
for i, t in enumerate((9.25, 9.375, 9.5, 9.625)): add(tick(1800 + 300 * i, .05, .5), t)                 # chips
fire = filt(rng.standard_normal(int(1.4 * SR)), lo=150, hi=1200) * np.exp(-tt(int(1.4 * SR)) * 2.2) * np.clip(tt(int(1.4 * SR)) / .15, 0, 1)
add(fire * .5, 10.05, 1.0, rev=.2)                                                                     # heater ignites
cr = np.zeros(int(1.8 * SR))
for k in range(70): i = int(rng.random() * (len(cr) - 400)); cr[i:i + 400] += rng.standard_normal(400) * np.exp(-tt(400) * 900) * rng.random()
add(filt(cr, lo=1500) * .6, 10.1, 1.0, pan=.3)                                                          # embers crackle
gn = int(.9 * SR); add(np.sin(2 * np.pi * np.cumsum(np.geomspace(200, 800, gn)) / SR) * np.sin(np.pi * tt(gn) / .9) * .12, 10.5, 1.0, rev=.3)  # gauge sweep
for i, t in enumerate((12.3, 12.55, 12.8, 13.05)): add(blip([880, 1047, 1175, 1319][i], .22), t, .55, rev=.35)  # steps
for i, t in enumerate((14.1, 14.32, 14.54)): add(blip([659, 784, 988][i], .3), t, .45, rev=.5)          # PICK YOUR DATES.
for t in (17.1, 17.25): add(blip(1319, .15), t, .35, rev=.4)                                            # CTAs

# ---------------- reverb + master ----------------
ir_n = int(2.2 * SR); ti = tt(ir_n)
def ir(seed):
    r = np.random.default_rng(seed).standard_normal(ir_n) * np.exp(-ti / .5); return filt(r, hi=6000) * .03
def conv(x, h):
    n = len(x) + len(h); nf = 1 << (n - 1).bit_length()
    return np.fft.irfft(np.fft.rfft(x, nf) * np.fft.rfft(h, nf), nf)[:len(x)]
L += conv(SEND, ir(1)); R += conv(SEND, ir(2))
mix = np.stack([L, R], 1)
mix = filt(mix[:, 0], lo=25), filt(mix[:, 1], lo=25)
mix = np.stack(mix, 1)
mix /= np.max(np.abs(mix)) + 1e-9
mix = np.tanh(mix * 1.6) / np.tanh(1.6) * .89
fade = np.clip((DUR - tn) / .35, 0, 1); mix *= fade[:, None]
pcm = (mix * 32767).astype('<i2')
with wave.open(sys.argv[1] if len(sys.argv) > 1 else 'soundtrack.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('peak', float(np.abs(mix).max()), 'rms', float(np.sqrt((mix ** 2).mean())))
