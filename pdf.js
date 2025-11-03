const puppeteer = require("puppeteer");

const pdfMargin = 30;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://myresume.test/"); // Replace with your HTML file path
  await page.pdf({
    path: "myresume.pdf",
    format: "A4",
    margin: {
      top: pdfMargin,
      left: pdfMargin,
      bottom: pdfMargin,
      right: pdfMargin,
    },
  }); // Adjust format as needed

  await browser.close();
})();
