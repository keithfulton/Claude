// usage: node render.js --out video.mp4 [--ffmpeg path]   |   node render.js --stills 0.5,2.6 --dir stills
const http = require('http'), fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const { chromium } = require('playwright');
const arg = k => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : null; };
const ROOT = __dirname, FPS = 30, N = 18 * FPS;
const MIME = { '.html': 'text/html', '.jpg': 'image/jpeg', '.png': 'image/png', '.css': 'text/css', '.woff2': 'font/woff2' };

const srv = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(d); });
}).listen(0, async () => {
  const port = srv.address().port;
  const browser = await chromium.launch({ args: ['--disable-web-security', '--font-render-hinting=none'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('console', m => console.log('[page]', m.text()));
  page.on('pageerror', e => console.log('[pageerror]', e.message));
  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForFunction(() => window.READY === true, null, { timeout: 60000 });
  const stills = arg('stills');
  if (stills) {
    const dir = arg('dir') || 'stills'; fs.mkdirSync(dir, { recursive: true });
    for (const s of stills.split(',')) {
      const i = Math.round(parseFloat(s) * FPS);
      const d = await page.evaluate(i => renderFrame(i, 'jpeg'), i);
      fs.writeFileSync(path.join(dir, `t${s}.jpg`), Buffer.from(d.split(',')[1], 'base64'));
    }
  } else {
    const ff = spawn(arg('ffmpeg') || 'ffmpeg', ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '16', '-pix_fmt', 'yuv420p', '-r', String(FPS), arg('out') || 'video.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
    const t0 = Date.now();
    for (let i = 0; i < N; i++) {
      const d = await page.evaluate(i => renderFrame(i, 'jpeg'), i);
      const buf = Buffer.from(d.split(',')[1], 'base64');
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 30 === 0) console.log(`frame ${i}/${N} ${((Date.now() - t0) / 1000).toFixed(1)}s`);
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await browser.close(); srv.close();
});
