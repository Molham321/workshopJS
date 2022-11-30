
import { JSDOM } from "jsdom";
import { getElement } from "./../../src/lib/functions/getElement";
import { expect } from "chai";

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

//  import "../index.ts";

describe("test getElement function", () => {
  it("to Return a HTML Element", () => {
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
    expect(getElement("#cls").id).to.be.equal("cls");
  });
});
