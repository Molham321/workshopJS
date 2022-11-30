import { expect } from "chai";
import { JSDOM } from "jsdom";
import { CET } from "../src/lib/functions/createElementTemplate";

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
    <div id = "id"></div>
    <table id = "table"></table>
  </body>
  </html>`
);
global.document = window.document;

describe("test CET function", () => {
    const div = document.getElementById("id") as HTMLDivElement;
    const myList: HTMLElement = CET(`
<ul>
    <li class = "listItem">dcode 1 from cEFormHtml</li>
</ul>
`);
    div.appendChild(myList);
    it("should create HTML Element", () => {
        expect(myList.parentElement?.id).to.be.equal(div.id);
    });
});
