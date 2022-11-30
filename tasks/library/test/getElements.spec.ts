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
    <div id = "id"></div>
    <table id = "table"></table>
    <div class = "container"></div>
    <div class = "container"></div>
    <div class = "container"></div>
    <div class = "container"></div>
  </body>
  </html>`
);

global.document = window.document;

// we can import $ & $$ from lib but not here.
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const table = $("#table") as HTMLElement;
describe("test $: querySelector of a table ", () => {
    it("table should be exist on document ", () => {
        expect(table).to.be.exist;
    });
    it("table should habe a id: table", () => {
        expect(table.id).to.be.equal("table");
    });
    it("table type should be a object", () => {
        expect(typeof table).to.be.equal("object");
    });
});

describe("test $$: querySelectorAll of a container class ", function () {
    it("should Return a NodeList of HTMLElemens", () => {
        expect($$(".container")).to.be.a("NodeList");
    });
});

describe("something slow", function () {
    this.slow(300000); // five minutes

    it("should take long enough for me to go make a sandwich", function () {
        // ...
    });
});

// TIMEOUTS - SUITE-LEVEL
describe("a suite of tests", function () {
    this.timeout(500);

    it("should take less than 500ms", function (done) {
        setTimeout(done, 300);
    });

    it("should take less than 500ms as well", function (done) {
        setTimeout(done, 250);
    });

    // TEST-LEVEL
    it("should take less than 500ms", function (done) {
        this.timeout(500);
        setTimeout(done, 300);
    });
});


