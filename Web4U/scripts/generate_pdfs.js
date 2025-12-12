const puppeteer = require('puppeteer');
const pages = [
  { url: 'http://localhost:8080/html.html', out: 'pdfs/html.pdf' },
  { url: 'http://localhost:8080/svg.html', out: 'pdfs/svg.pdf' },
  { url: 'http://localhost:8080/css.html', out: 'pdfs/css.pdf' }
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (const p of pages) {
    console.log('Abriendo', p.url);
    await page.goto(p.url, { waitUntil: 'networkidle0' });
    await page.pdf({ path: p.out, format: 'A4', printBackground: true });
    console.log('Guardado', p.out);
  }
  await browser.close();
})();
