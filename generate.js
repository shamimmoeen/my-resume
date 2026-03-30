const puppeteer = require("puppeteer");

const pdfMargin = 30;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://my-resume.local/", { waitUntil: "networkidle0" });

  await page.pdf({
    path: "Mainul-Hassan-Resume.pdf",
    format: "A4",
    margin: {
      top: pdfMargin,
      left: pdfMargin,
      bottom: pdfMargin,
      right: pdfMargin,
    },
  });

  await browser.close();

  console.log("Generated: Mainul-Hassan-Resume.pdf");
})();
