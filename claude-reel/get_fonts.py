import re, os, subprocess
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'
URL = 'https://fonts.googleapis.com/css2?family=Unbounded:wght@500;800&family=Inter+Tight:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700&display=block'
os.makedirs('fonts', exist_ok=True)
css = subprocess.check_output(['curl', '-sSf', '-A', UA, URL]).decode()
blocks = re.findall(r'/\*\s*latin\s*\*/\s*(@font-face\s*{[^}]*})', css)
out = []
for i, b in enumerate(blocks):
    u = re.search(r'url\((https://[^)]+)\)', b).group(1)
    fn = f'fonts/f{i}.woff2'
    subprocess.check_call(['curl', '-sSf', '-o', fn, u])
    out.append(b.replace(u, f'f{i}.woff2'))
open('fonts/fonts.css', 'w').write('\n'.join(out))
print(len(out), 'faces')
