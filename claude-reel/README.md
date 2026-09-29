# Capabilities reel (Keith Fulton × Claude)

A 24-second motion graphic built entirely in code. It includes kinetic type, particles, graphic transitions and an audio-reactive soundtrack. It renders to any aspect ratio from one source.

## Re-skin it
Everything personal lives in `config.json`:

| Key | What it changes |
|---|---|
| `name`, `initials`, `partner` | End card, HUD, intro subtitle (portrait splits `name` onto two lines) |
| `tagline`, `cta`, `year` | End card copy |
| `palette` | Every color in the piece (`lime` is the main accent) |
| `scenes[].prompt` | The prompt typed in the bottom bar of each capability scene |
| `tools` | Nodes in the "connected" scene (4–12 fit well) |
| `montage` | The 8 rapid-fire words at 18–20 s |

Keystroke sounds are generated from the prompts, so after editing prompts re-run `audio.py`.

## Render
```bash
python3 get_fonts.py                      # Unbounded, Inter Tight, JetBrains Mono → fonts/
python3 audio.py soundtrack.wav features.json
node render.js --w 1920 --h 1080 --audio soundtrack.wav --out out/reel-16x9.mp4
node render.js --w 1080 --h 1920 --audio soundtrack.wav --out out/reel-9x16.mp4
node render.js --w 1920 --h 1080 --stills 3.4,9.6 --dir stills   # quick frame checks
```
Needs Node + Playwright (Chromium) and ffmpeg (`--ffmpeg <path>` if it's not on PATH).

## Timeline (120 BPM, one scene per bar)
| Time | Scene |
|---|---|
| 0–2 | Boot: `> make it move.` types, glitches, shatters into particles |
| 2–4 | IDEAS / INTO / SHIPPED / WORK. slam in on the beats |
| 4–18 | Seven prompt → output scenes: code, design systems, websites, motion, sound (live spectrum + piano roll of the real score), data (real stats of this reel), connected tools |
| 18–20 | 8-word montage on 8th notes |
| 20–24 | Particles form the name; tagline, CTA, clean 1.5 s hold for editing |

`features.json` holds per-frame loudness, bass and a 32-band spectrum plus every note, written by `audio.py`. The visuals read it, so the pulses, spectrum and charts come from the actual track.
