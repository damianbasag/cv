// Tworzy folder dist/ gotowy do publikacji: index.html (ze styles.css zamiast Tailwind CDN) + cv.pdf.
// styles.css generuje w następnym kroku Tailwind CLI (patrz "build" w package.json).
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
fs.mkdirSync(dist, { recursive: true });

let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const block = /<!-- TAILWIND:START[\s\S]*?<!-- TAILWIND:END -->/;
if (!block.test(html)) {
  throw new Error('Nie znaleziono znaczników TAILWIND:START / TAILWIND:END w index.html');
}
html = html.replace(block, () => '<link rel="stylesheet" href="styles.css">');
fs.writeFileSync(path.join(dist, 'index.html'), html);
fs.copyFileSync(path.join(__dirname, 'cv.pdf'), path.join(dist, 'cv.pdf'));
const imagesDir = path.join(__dirname, 'images');
if (fs.existsSync(imagesDir)) {
  fs.cpSync(imagesDir, path.join(dist, 'images'), { recursive: true });
}
console.log('OK: dist/index.html, dist/cv.pdf oraz dist/images/ gotowe.');

