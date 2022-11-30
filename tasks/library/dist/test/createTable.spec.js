"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const jsdom_1 = require("jsdom");
const createTable_1 = require("../src/lib/functions/createTable");
const { window } = new jsdom_1.JSDOM(`<!doctype html>
  <html>
  <body>
    <div id = "cls"></div>
    <table id = "table"></table>
  </body>
  </html>`);
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
(0, createTable_1.CT)(parent3, columns, data, className, id);
describe("test CT function", () => {
    it("should create a new table in the document", () => {
        (0, chai_1.expect)(document.getElementsByTagName("table")).to.be.exist;
    });
});
//# sourceMappingURL=createTable.spec.js.map