# Procedural soundtrack for the capabilities reel + per-frame audio features for audio-reactive visuals.
# usage: python3 audio.py soundtrack.wav features.json
import json, sys, wave
import numpy as np

CFG = json.load(open('config.json'))
SR = 48000; DUR = float(CFG['duration']); N = int(SR * DUR); FPS = 30
BEAT = 60 / CFG['bpm']
rng = np.random.default_rng(11)
L = np.zeros(N); R = np.zeros(N); SEND = np.zeros(N); NOTES = []

def at(t): return int(round(t * SR))
def tt(n): return np.arange(n) / SR
def add(sig, t, g=1.0, pan=0.0, rev=0.0):
    i = at(t)
    if i >= N or i + len(sig) <= 0: return
    if i < 0: sig = sig[-i:]; i = 0
    j = min(N, i + len(sig)); s = sig[:j - i] * g
    L[i:j] += s * np.sqrt((1 - pan) / 2) * 1.414; R[i:j] += s * np.sqrt((1 + pan) / 2) * 1.414
    SEND[i:j] += s * rev
def filt(x, lo=None, hi=None, order=4):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); h = np.ones_like(f)
    if hi: h /= np.sqrt(1 + (f / hi) ** order)
    if lo: h /= np.sqrt(1 + (lo / np.maximum(f, 1e-3)) ** order)
    return np.fft.irfft(X * h, n=len(x))
def mtof(m): return 440 * 2 ** ((m - 69) / 12)
def saw(f, n, phase=0.0, kmax=40):
    t = tt(n); s = np.zeros(n); K = int(max(1, min(kmax, 15000 / f)))
    for k in range(1, K + 1): s += np.sin(2 * np.pi * k * f * t + k * phase) / k
    return s * .55
def sq(f, n, kmax=25):
    t = tt(n); s = np.zeros(n); K = int(max(1, min(kmax, 15000 / f)))
    for k in range(1, K + 1, 2): s += np.sin(2 * np.pi * k * f * t) / k
    return s * .6
def adsr(n, a=.01, r=.1):
    e = np.ones(n); na = max(1, int(a * SR)); nr = max(1, int(r * SR))
    e[:na] = np.linspace(0, 1, na); e[-nr:] *= np.linspace(1, 0, nr); return e

# ---------------- drums ----------------
def kick():
    n = int(.55 * SR); t = tt(n); f = 42 + 140 * np.exp(-t * 32)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 6)
    s += filt(rng.standard_normal(n), lo=2500) * np.exp(-t * 500) * .5
    return np.tanh(s * 2.2) * .9
def clap():
    n = int(.4 * SR); t = tt(n); e = np.zeros(n)
    for d in (0, .009, .019, .028): e += np.where(t >= d, np.exp(-(t - d) * 150), 0) * .6
    e += np.where(t >= .03, np.exp(-(t - .03) * 13), 0)
    return filt(rng.standard_normal(n), lo=900, hi=6000) * e * .85
def hat(open_=False):
    n = int((.32 if open_ else .06) * SR); t = tt(n)
    return filt(rng.standard_normal(n), lo=8000) * np.exp(-t * (8 if open_ else 80)) * .33
def snare():
    n = int(.22 * SR); t = tt(n)
    return filt(rng.standard_normal(n), lo=1400, hi=9000) * np.exp(-t * 24) * .6 + np.sin(2 * np.pi * 200 * t) * np.exp(-t * 35) * .4
def rim():
    n = int(.05 * SR); t = tt(n); return (np.sin(2 * np.pi * 1700 * t) + filt(rng.standard_normal(n), lo=3000) * .5) * np.exp(-t * 120) * .5

K, CL, HC, HO, SN, RM = kick(), clap(), hat(), hat(True), snare(), rim()
kicks = []
for b in range(4, 36):                       # beats 2.0 .. 17.5 : main groove
    t = b * BEAT; add(K, t, .95); kicks.append(t)
    if b % 2 == 1: add(CL, t, .5, rev=.3)
    add(HC, t + BEAT / 2, .5, pan=.3)
    if b >= 12: add(HC, t + BEAT / 4, .2, pan=-.35); add(HC, t + 3 * BEAT / 4, .2, pan=-.35)
    if b % 4 == 2: add(RM, t + 3 * BEAT / 4, .5, pan=-.2, rev=.2)
    if b % 8 == 7: add(HO, t + BEAT / 2, .35, pan=.2)
# montage bar (18-20): four-on-floor + 16th snare build
for b in range(36, 40):
    t = b * BEAT; add(K, t, 1.0); kicks.append(t)
    for k in range(4): add(SN, t + k * BEAT / 4, .12 + .1 * (b - 36) + .04 * k, pan=.15 * (-1) ** k, rev=.15)
add(K, 20.0, 1.2); kicks.append(20.0)

sc = np.ones(N); tn = tt(N)
for k in kicks:
    i = at(k); sc[i:] = np.minimum(sc[i:], 1 - .72 * np.exp(-(tn[i:] - k) / .1))

# ---------------- harmony: D minor  i - VI - III - VII ----------------
CH = {'Dm': [62, 65, 69, 72], 'Bb': [62, 65, 70, 74], 'F': [60, 65, 69, 72], 'C': [60, 64, 67, 72], 'Dfin': [50, 57, 62, 64, 65, 69, 74]}
ROOT = {'Dm': 38, 'Bb': 34, 'F': 41, 'C': 36}
PROG = ['Dm', 'Dm', 'Bb', 'F', 'C', 'Dm', 'Bb', 'F', 'C', 'C']   # bars 0..9 (2 s each)
padL = np.zeros(N); padR = np.zeros(N); bus = np.zeros(N); arpL = np.zeros(N); arpR = np.zeros(N); lead = np.zeros(N)
for b, ch in enumerate(PROG):
    t0 = 2 * b; n = int(2.06 * SR)
    for m in CH[ch]:
        for dt, side in ((-.008, 0), (0, 2), (.008, 1)):
            s = saw(mtof(m) * (1 + dt), n, phase=rng.random() * 6, kmax=22) * adsr(n, .05, .15)
            i = at(t0); j = min(N, i + n)
            if side in (0, 2): padL[i:j] += s[:j - i]
            if side in (1, 2): padR[i:j] += s[:j - i]
    if b >= 1:                                   # rolling 16th bass, root + octave
        f = mtof(ROOT[ch]); nb = int(.12 * SR)
        for k in range(16):
            if k % 4 == 0 and b < 9: continue    # leave room for kick
            ff = f * (2 if k % 4 == 2 else 1)
            s = (saw(ff, nb, kmax=30) * .7 + np.sin(2 * np.pi * ff / 2 * tt(nb)) * .6) * adsr(nb, .003, .05)
            i = at(t0 + k * BEAT / 4); j = min(N, i + nb); bus[i:j] += s[:j - i] * (.8 if k % 2 else 1)
    if b >= 2:                                   # square arp 16ths, ping-pong
        notes = CH[ch] + [CH[ch][1] + 12, CH[ch][2] + 12]; pat = [0, 2, 4, 1, 5, 3, 2, 4]
        for k in range(16):
            m = notes[pat[k % 8]] + 12; nn = int(.2 * SR); t = tt(nn)
            s = np.zeros(nn); f = mtof(m)
            for h in range(1, 14, 2): s += np.sin(2 * np.pi * h * f * t) / h * np.exp(-t * (14 + h * 6))
            tk = t0 + k * BEAT / 4; i = at(tk); j = min(N, i + nn)
            (arpL if k % 2 else arpR)[i:j] += s[:j - i] * .11; (arpR if k % 2 else arpL)[i:j] += s[:j - i] * .04
            NOTES.append([round(tk, 4), m, .125])
    if b in (3, 4, 7, 8):                        # hook lead on bars 3-4, 7-8
        mel = [(0, 74, .5), (.5, 72, .25), (.75, 69, .25), (1, 74, .5), (1.5, 77, .5)] if b % 4 == 3 else [(0, 76, .5), (.5, 74, .5), (1, 72, .75), (1.75, 69, .25)]
        for (o, m, d) in mel:
            nn = int((d + .2) * SR); f = mtof(m); s = saw(f, nn, kmax=18) * .5 + saw(f * 1.005, nn, kmax=18) * .5
            s *= adsr(nn, .01, .2) * (1 + .1 * np.sin(2 * np.pi * 5.5 * tt(nn)))
            i = at(t0 + o); j = min(N, i + nn); lead[i:j] += s[:j - i]
            NOTES.append([round(t0 + o, 4), m, d])
# finale: big chord stab at 20 s with long tail
n = N - at(20.0)
for m in CH['Dfin']:
    for dt in (-.006, 0, .006):
        s = saw(mtof(m) * (1 + dt), n, phase=rng.random() * 6, kmax=26) * np.exp(-tt(n) * .9) * adsr(n, .004, .6)
        i = at(20.0); padL[i:] += s * (1.3 if dt <= 0 else .6); padR[i:] += s * (1.3 if dt >= 0 else .6)
s = np.sin(2 * np.pi * mtof(26) * tt(n)) * np.exp(-tt(n) * 1.4) * 1.2; bus[at(20.0):] += s

padL = filt(padL, lo=110, hi=2400); padR = filt(padR, lo=110, hi=2400)
padg = np.where(tn < 2, (np.clip(tn / 2, 0, 1) ** 2) * .9 + .1, np.where(tn >= 20, 1.0, .7))
padL *= padg * sc * .15; padR *= padg * sc * .15
bus = filt(bus, hi=1100) * sc * .42
lead = filt(lead, lo=200, hi=5000) * sc * .09
L += padL + bus + arpL + lead * .8; R += padR + bus + arpR + lead
SEND += (padL + padR) * .3 + (arpL + arpR) * .6 + lead * .6

# ---------------- FX synced to picture ----------------
def whoosh(d=.5, up=True):
    n = int(d * SR); t = tt(n); x = rng.standard_normal(n); y = np.zeros(n); z = 0.0
    a = 1 - np.exp(-2 * np.pi * (np.linspace(300, 8000, n) if up else np.linspace(8000, 300, n)) / SR)
    for i in range(n): z += a[i] * (x[i] - z); y[i] = z
    return (y - filt(y, hi=250)) * np.sin(np.pi * t / d) ** 2 * (t / d) ** .6 * 1.4
def impact(big=1.0):
    n = int(1.8 * SR); t = tt(n); f = 30 + 80 * np.exp(-t * 9)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 3) + filt(rng.standard_normal(n), hi=4000) * np.exp(-t * 12) * .5
    return np.tanh(s * 1.4 * big) * .8
def riser(d, f0=150, f1=1600):
    n = int(d * SR); t = tt(n); ph = 2 * np.pi * np.cumsum(np.geomspace(f0, f1, n)) / SR
    return (np.sin(ph) + .5 * np.sin(ph * 1.5)) * (t / d) ** 2 * .2 + filt(rng.standard_normal(n), lo=2500) * (t / d) ** 3 * .35
def key():
    n = int(.03 * SR); t = tt(n)
    return filt(rng.standard_normal(n), lo=2000, hi=9000) * np.exp(-t * 260) * .9 + np.sin(2 * np.pi * 3200 * t) * np.exp(-t * 300) * .2
def blip(f=880, d=.16):
    n = int(d * SR); t = tt(n); return (np.sin(2 * np.pi * f * t) + .3 * np.sin(4 * np.pi * f * t)) * np.exp(-t * 24) * .5
def glitch(d=.18):
    n = int(d * SR); s = np.zeros(n); step = int(.012 * SR)
    for i in range(0, n, step): s[i:i + step] = sq(200 + rng.random() * 2400, len(s[i:i + step]), 7) * (rng.random() > .35)
    return s * .25 * np.exp(-tt(n) * 8)
def shimmer(d=1.5):
    n = int(d * SR); t = tt(n); s = np.zeros(n)
    for m in (86, 89, 93, 98, 101): s += np.sin(2 * np.pi * mtof(m) * t + rng.random() * 6) * np.exp(-t * 2.6) * (1 - np.exp(-t * 50))
    return s * .07

KEY = key()
def typed(text, s):                             # keystrokes exactly where the prompt bar types
    n = len(text)
    for i in range(n): add(KEY, s + .04 + .46 * i / max(1, n - 1), .28 + .1 * rng.random(), pan=.3 * np.sin(i * 1.7))
    add(blip(1760, .1), s + .56, .35, rev=.2)
# boot: cursor typing "make it move." then shatter
for i in range(13): add(KEY, .35 + i * .045, .35, pan=.2 * np.sin(i))
add(glitch(.3), 1.2, 1.0, rev=.2)
add(riser(2.0), 0.0, .8, rev=.3)
for si, sc_ in enumerate(CFG['scenes']):
    if 'prompt' in sc_: typed(sc_['prompt'], 2 * si)
for T in (2, 4, 6, 8, 10, 12, 14, 16, 18):
    add(whoosh(.45), T - .4, .45, pan=-.4, rev=.2); add(impact(1.3 if T == 2 else .85), T, .6 if T != 2 else .9, rev=.35)
    if T in (4, 8, 12, 16): add(glitch(.16), T, .8)
for i, t in enumerate((2.0, 2.5, 3.0)): add(blip(587 * 2 ** (i / 4), .3), t + .05, .4, rev=.4)       # intro words
for k in range(8): add(blip(880 * 2 ** (k / 12), .12), 18 + k * .25, .45, pan=.4 * (-1) ** k, rev=.3)  # montage words
add(riser(2.0, 250, 2400), 18.0, .9, rev=.3)
add(impact(1.5), 20.0, 1.0, rev=.5); add(whoosh(.5), 19.6, .6, rev=.3)
add(shimmer(2.5), 20.35, 1.0, pan=.2, rev=.8); add(blip(1175, .4), 21.4, .35, rev=.6); add(blip(1568, .4), 21.9, .3, rev=.6)

# ---------------- reverb + master ----------------
ir_n = int(2.4 * SR); ti = tt(ir_n)
def ir(seed): return filt(np.random.default_rng(seed).standard_normal(ir_n) * np.exp(-ti / .55), hi=6500) * .03
def conv(x, h):
    n = len(x) + len(h); nf = 1 << (n - 1).bit_length()
    return np.fft.irfft(np.fft.rfft(x, nf) * np.fft.rfft(h, nf), nf)[:len(x)]
L += conv(SEND, ir(3)); R += conv(SEND, ir(4))
mix = np.stack([filt(L, lo=28), filt(R, lo=28)], 1)
mix /= np.max(np.abs(mix)) + 1e-9
mix = np.tanh(mix * 1.7) / np.tanh(1.7) * .89
mix *= np.clip((DUR - tn) / .6, 0, 1)[:, None]
with wave.open(sys.argv[1] if len(sys.argv) > 1 else 'soundtrack.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mix * 32767).astype('<i2').tobytes())

# ---------------- per-frame features ----------------
mono = mix.mean(1); nf = int(DUR * FPS); win = 2048; hw = np.hanning(win)
edges = np.geomspace(40, 16000, 33); freqs = np.fft.rfftfreq(win, 1 / SR)
BI = np.searchsorted(freqs, edges)
for k in range(1, 33): BI[k] = max(BI[k], BI[k - 1] + 1)
rms, low, bands = [], [], []
for fi in range(nf):
    c = at(fi / FPS); seg = mono[max(0, c - win // 2):c + win // 2]
    seg = np.pad(seg, (0, win - len(seg)))
    sp = np.abs(np.fft.rfft(seg * hw))
    rms.append(float(np.sqrt((seg ** 2).mean())))
    low.append(float(sp[(freqs > 30) & (freqs < 150)].mean()))
    bands.append([float(sp[BI[k]:BI[k + 1]].mean() + 1e-9) for k in range(32)])
B = 20 * np.log10(np.array(bands)); B = np.clip((B - (B.max() - 60)) / 60, 0, 1)
feat = {'fps': FPS, 'rms': list(np.round(np.array(rms) / max(rms), 3)), 'low': list(np.round(np.array(low) / max(low), 3)),
        'bands': np.round(B, 3).tolist(), 'notes': NOTES, 'kicks': [round(k, 3) for k in kicks]}
json.dump(feat, open(sys.argv[2] if len(sys.argv) > 2 else 'features.json', 'w'))
print('ok peak', float(np.abs(mix).max()), 'notes', len(NOTES))
