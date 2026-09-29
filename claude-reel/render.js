// usage: node render.js --w 1920 --h 1080 --out reel.mp4 [--audio soundtrack.wav] [--ffmpeg path]
//        node render.js --w 1080 --h 1920 --stills 1.5,4.2 --dir stills
const http = require('http'), fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const { chromium } = require('playwright');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const ROOT = __dirname, FPS = 30, W = +arg('w', 1920), H = +arg('h', 1080);
const N = JSON.parse(fs.readFileSync(path.join(ROOT, 'config.json'))).duration * FPS;
const MIME = { '.html': 'text/html', '.json': 'application/json', '.css': 'text/css', '.woff2': 'font/woff2' };

const srv = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(d); });
}).listen(0, async () => {
  const browser = await chromium.launch({ args: ['--font-render-hinting=none'] });
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  page.on('pageerror', e => console.log('[pageerror]', e.message));
  await page.goto(`http://127.0.0.1:${srv.address().port}/index.html?w=${W}&h=${H}`);
  await page.waitForFunction(() => window.READY === true, null, { timeout: 60000 });
  const stills = arg('stills');
  if (stills) {
    const dir = arg('dir', 'stills'); fs.mkdirSync(dir, { recursive: true });
    for (const s of stills.split(',')) {
      const d = await page.evaluate(i => renderFrame(i), Math.round(parseFloat(s) * FPS));
      fs.writeFileSync(path.join(dir, `t${s}.jpg`), Buffer.from(d.split(',')[1], 'base64'));
    }
  } else {
    const audio = arg('audio');
    const ff = spawn(arg('ffmpeg', 'ffmpeg'), ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
      ...(audio ? ['-i', audio, '-map', '0:v', '-map', '1:a', '-c:a', 'aac', '-b:a', '256k', '-shortest'] : []),
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', String(FPS), arg('out', 'reel.mp4')],
      { stdio: ['pipe', 'ignore', 'inherit'] });
    const t0 = Date.now();
    for (let i = 0; i < N; i++) {
      const d = await page.evaluate(i => renderFrame(i), i);
      if (!ff.stdin.write(Buffer.from(d.split(',')[1], 'base64'))) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 60 === 0) console.log(`frame ${i}/${N} ${((Date.now() - t0) / 1000).toFixed(1)}s`);
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await browser.close(); srv.close();
});
