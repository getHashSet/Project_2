// require for puppeteer
var puppeteer = require("puppeteer");

var $saveBtn = $("#save");

function screenshot() {
  async () => {
    // the headless option allows our puppeteer to view the webpage from a client side view/can change if need be
    const options = { headless: false };

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    //   launches our defined website with chromium
    await page.goto("https://polar-headland-36196.herokuapp.com/");

    //   screen caps our current page (can be switched between jpeg and png)
    await page.screenshot({ path: "puppeteer_test.png" });

    //   closes our instance of chromium
    await browser.close();
  };
}
// this runs puppeteer

$saveBtn.on("click", screenshot);
