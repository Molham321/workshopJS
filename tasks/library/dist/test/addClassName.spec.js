"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addClassName_1 = require("../src/lib/functions/addClassName");
const chai_1 = require("chai");
const jsdom_1 = require("jsdom");
const { window } = new jsdom_1.JSDOM(`<!doctype html>
      <html>
        <body>
          <div id = "id" class = "class"></div>
        </body>
      </html>`);
global.document = window.document;
const div = document.getElementById("id");
describe("test addClassName function", () => {
    it("should add class nothing to the element", () => {
        (0, addClassName_1.addClassName)(div);
        (0, chai_1.expect)(div.className).to.be.equal("class");
    });
    it("should add class 'class1' to the element", () => {
        (0, addClassName_1.addClassName)(div, "class1");
        (0, chai_1.expect)(div.className).to.be.equal("class class1");
    });
    it("should add class 'class1 class2' to the element", () => {
        (0, addClassName_1.addClassName)(div, "class1", "class2");
        (0, chai_1.expect)(div.className).to.be.equal("class class1 class2");
    });
});
//# sourceMappingURL=addClassName.spec.js.map