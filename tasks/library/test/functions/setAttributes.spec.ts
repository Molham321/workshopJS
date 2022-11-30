import { setAttributes } from "./../../src/lib/functions/setAttributes";
import { expect } from "chai";
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
  "<!doctype html><html><body><div>John</div></body></html>"
);
global.document = window.document;

describe("test getElements function", () => {
  it("to Return a HTML Elements", () => {
    const div = document.querySelector("div") as HTMLDivElement;

    setAttributes(div, [
        { n: "id", v: "id" },
        { n: "class", v: "class" },
    ]);

    expect(document.getElementById("id")?.id).to.be.equal("id");
    expect(document.getElementById("id")?.className).to.be.equal("class");
  });
});
