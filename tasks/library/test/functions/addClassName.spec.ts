import { addClassName } from "./../../src/lib/functions/addClassName";
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
const div = document.getElementById("cls") as HTMLElement;

describe("test addClassName function", () => {
  it("add one class name to element", () => {
    addClassName(div);
    expect(div.className).to.be.equal("");
  });

  it("add one class name to element", () => {
    addClassName(div, "class1");
    expect(div.className).to.be.equal("class1");
  });

  it("add one or more class name to element", () => {
    addClassName(div, "class1", "class2");
    expect(div.className).to.be.equal("class1 class2");
  });
});
