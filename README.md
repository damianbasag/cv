# Portfolio — Damian Basąg

## Zawartość
- `index.html` — cała strona (działa od razu, Tailwind ładuje się z CDN)
- `cv.pdf` — CV do pobrania (przycisk „Pobierz CV”)
- `tailwind.config.js`, `input.css`, `build.js`, `package.json` — opcjonalna wersja z własnym CSS

## 1. Formularz kontaktowy (Formspree)
Formularz jest już podpięty pod `https://formspree.io/f/xwlplrqw` (stała `FORM_ENDPOINT` w `index.html`).
- Przy pierwszej wiadomości Formspree może poprosić o potwierdzenie adresu e-mail — sprawdź skrzynkę `damian.basag@gmail.com` (także spam).
- Wyślij wiadomość testową z opublikowanej strony (nie z pliku otwartego z dysku) i sprawdź, czy dotarła.
- W panelu Formspree włącz ochronę przed spamem.

## 2. Publikacja — najprostsza wersja (CDN)
1. Umieść `index.html` i `cv.pdf` w jednym folderze.
2. Wejdź na app.netlify.com/drop i przeciągnij folder.
3. Załóż darmowe konto, żeby strona nie wygasła. Nazwę adresu zmienisz w Site configuration → Change site name.

(Alternatywa: GitHub Pages — wgraj oba pliki do repozytorium i włącz Settings → Pages.)

## 3. Własny CSS zamiast Tailwind CDN (opcjonalnie, szybsza strona)
Wymaga komputera z Node.js (wersja LTS).
1. W folderze projektu: `npm install`
2. `npm run build`
3. Powstaje folder `dist/` (index.html + styles.css + cv.pdf). Publikuj zawartość `dist/`.

Po zmianie klas Tailwind w `index.html` uruchom `npm run build` ponownie.

## Ikony
Ikony (Font Awesome Free 6, licencja CC BY 4.0) są wbudowane w `index.html` jako SVG — strona nie zależy już od zewnętrznego CDN z ikonami.
