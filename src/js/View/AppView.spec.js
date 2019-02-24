const puppeteer = require('puppeteer');
const handler = require('serve-handler');
const http = require('http');
const path = require('path');

describe('app', () => {
  let server;
  let page;
  let browser;

  beforeAll((done) => {
    server = http.createServer((request, response) => {
      console.log(__dirname);
      const pubFolder = path.resolve(__dirname, '../../../dist');
      return handler(request, response, {
        public: pubFolder,
      });
    });

    server.listen(3000,  () => {
      done();
    });
  });

  beforeAll(async () => {
    browser = await puppeteer.launch({headless: true});
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
    server.close();
  });

  it('should render app', async () => {
    await page.waitForSelector('[data-hook="app"]');
    const app = await page.$('[data-hook="app"]');
    expect(app).toBeTruthy();
  });
});
