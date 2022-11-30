import { expect } from "chai";
import { JSDOM } from "jsdom";
import { CT } from "../src/lib/functions/createTable";

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
    <div id = "cls"></div>
    <table id = "table"></table>
  </body>
  </html>`
);
global.document = window.document;

const data = [
    {
        name: "James",
        age: 21,
        country: "US"
    },
    {
        name: "Rony",
        age: 31,
        country: "DE"
    },
    {
        name: "Max",
        age: 22,
        country: "SP"
    },
    {
        name: "Mark",
        age: 25,
        country: "CA"
    },
];
const parent3 = document.body;
const columns = ["name", "age", "country"];
const className = "table";
const id = "table";
CT(parent3, columns, data, className, id);

describe("test CT function", () => {
    it("should create a new table in the document", () => {
        expect(document.getElementsByTagName("table")).to.be.exist;
    });
});
