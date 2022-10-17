import { cElement } from "./../../src/lib/functions/cElement";
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

describe("test cElement function", () => {
  it("to create HTML Element", () => {
    const { window } = new JSDOM(
      '<!doctype html><html><body><div id = "cls"></div></body></html>'
    );
    global.document = window.document;

    document.body.appendChild(
      cElement({
        elementType: "div",
        innerHTML: "test from cElement",
        attributs: [
          { qualifiedName: "class", value: "class" },
          { qualifiedName: "id", value: "id" },
        ],
      })
    );

    expect(document.getElementById("id")).to.be.exist;
  });
});
