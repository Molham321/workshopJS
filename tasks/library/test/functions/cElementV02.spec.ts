import { cElementV02 } from "./../../src/lib/functions/cElementV02";
import { expect } from "chai";
import { JSDOM } from "jsdom";

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
  }
}

const { window } = new JSDOM(
  '<!doctype html><html><body><div id = "cls"></div></body></html>'
);
global.document = window.document;

describe("test cElementV02 function", () => {
  it("to create HTML Element", () => {
    const div = cElementV02(
      "div",
      document.body,
      "test from cElement",
      "textContet",
      ["class", "class2"],
      ["id", "id1"]
    );

    expect(document.getElementById("id1")?.className).to.be.equal(
      div.className
    );
  });
});
