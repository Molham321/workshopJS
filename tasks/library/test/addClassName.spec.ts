import { addClassName } from "../src/lib/functions/addClassName";
import { expect } from "chai";
import { JSDOM } from "jsdom";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
  }
}

const { window } = new JSDOM(
    `<!doctype html>
      <html>
        <body>
          <div id = "id" class = "class"></div>
        </body>
      </html>`
);
global.document = window.document;

const div = document.getElementById("id") as HTMLElement;

describe("test addClassName function", () => {
    it("should add class nothing to the element", () => {
        addClassName(div);
        expect(div.className).to.be.equal("class");
    });

    it("should add class 'class1' to the element", () => {
        addClassName(div, "class1");
        expect(div.className).to.be.equal("class class1");
    });

    it("should add class 'class1 class2' to the element", () => {
        addClassName(div, "class1", "class2");
        expect(div.className).to.be.equal("class class1 class2");
    });
});
