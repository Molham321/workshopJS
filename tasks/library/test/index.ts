import { JSDOM } from "jsdom";

/**
 * we need to decal globally so that we can use keywords like document in the test and ts file
 */
declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
  }
}

/**
 * we need to create a fake HTML document for testing
 */
const { window } = new JSDOM(
  `<!doctype html>
  <html>
  <body>
    <div id = "cls"></div>
    <table id = "table"></table>
  </body>
  </html>`
);
global.document = window.document;

//  import "../index.ts";
