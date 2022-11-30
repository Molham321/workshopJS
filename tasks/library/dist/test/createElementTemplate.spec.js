"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const jsdom_1 = require("jsdom");
const createElementTemplate_1 = require("../src/lib/functions/createElementTemplate");
const { window } = new jsdom_1.JSDOM(`<!doctype html>
  <html>
  <body>
    <div id = "id"></div>
    <table id = "table"></table>
  </body>
  </html>`);
global.document = window.document;
describe("test CET function", () => {
    const div = document.getElementById("id");
    const myList = (0, createElementTemplate_1.CET)(`
<ul>
    <li class = "listItem">dcode 1 from cEFormHtml</li>
</ul>
`);
    div.appendChild(myList);
    it("should create HTML Element", () => {
        var _a;
        (0, chai_1.expect)((_a = myList.parentElement) === null || _a === void 0 ? void 0 : _a.id).to.be.equal(div.id);
    });
});
//# sourceMappingURL=createElementTemplate.spec.js.map