"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const jsdom_1 = require("jsdom");
const createElement_1 = require("../src/lib/functions/createElement");
const { window } = new jsdom_1.JSDOM(`<!doctype html>
        <html>
            <body>
            </body>
        </html>`);
global.document = window.document;
describe("test CE function", () => {
    var _a;
    function doSomething() {
        return 1 + 2;
    }
    const newDivElement = (0, createElement_1.CE)({
        type: "div",
        events: {
            click: doSomething,
        },
        attributs: {
            class: "class",
            id: "id",
        },
    });
    const a = (0, createElement_1.CE)({
        type: "a",
        attributs: {
            id: "a-id",
            target: "target"
        }
    });
    const td = (0, createElement_1.CE)({
        type: "td",
        attributs: {
            id: "td-id",
            colspan: "8"
        }
    });
    const formEle = (0, createElement_1.CE)({
        type: "form",
        attributs: {
            id: "form-id",
            autocomplete: "on"
        }
    });
    const input = (0, createElement_1.CE)({
        type: "input",
        events: {
            click: doSomething,
        },
        attributs: {
            id: "input-id",
            class: "input-class",
            textContent: "input-textContent",
            value: "input-value",
            type: "text",
            placeholder: "input-placeholder",
            title: "input-title",
            maxlength: "8",
            contenteditable: "",
            min: "2",
            max: "4",
            step: "input-step",
            pattern: "input-pattern",
            required: "",
            disabled: "",
            "data-filtervalue": "input",
            "data-columns": "2",
            "data-value": "2",
            "data-index-number": "2",
            "data-parent": "input"
        },
    });
    document.body.appendChild(newDivElement);
    document.body.appendChild(a);
    document.body.appendChild(td);
    document.body.appendChild(formEle);
    (_a = document.getElementById("id")) === null || _a === void 0 ? void 0 : _a.appendChild(input);
    const inputElement = document.getElementById("input-id");
    const aElement = document.getElementById("a-id");
    const tdElement = document.getElementById("td-id");
    const formElement = document.getElementById("form-id");
    it("should create a new HTMLElement", () => {
        (0, chai_1.expect)(newDivElement).to.be.exist;
    });
    describe("test function doSomething()", () => {
        const result = doSomething();
        it("doSomthing should return 3", () => {
            chai_1.assert.equal(result, 3);
        });
        it("doSomething should return type number", () => {
            chai_1.assert.typeOf(result, "number");
        });
        it("doSomething should return number above 2", () => {
            chai_1.assert.isAbove(result, 2);
        });
    });
    describe("test HTMLElements ", () => {
        describe("test HTMLElements Type", () => {
            it("inputElement should be a type of HTMLInputElement", () => {
                chai_1.assert.typeOf(inputElement, "HTMLInputElement");
            });
            it("inputElement should be a type of HTMLAnchorElement", () => {
                chai_1.assert.typeOf(aElement, "HTMLAnchorElement");
            });
            it("inputElement should be a type of HTMLTableCellElement", () => {
                chai_1.assert.typeOf(tdElement, "HTMLTableCellElement");
            });
            it("inputElement should be a type of HTMLFormElement", () => {
                chai_1.assert.typeOf(formElement, "HTMLFormElement");
            });
        });
        describe("test inputElement attributes", () => {
            it("inputElement should have id: 'input-id'", () => {
                (0, chai_1.expect)(inputElement.id).to.be.equal("input-id");
            });
            it("inputElement should have class: 'input-class'", () => {
                (0, chai_1.expect)(inputElement.className).to.be.equal("input-class");
            });
            it("inputElement should have textContent =: 'input-textContent'", () => {
                (0, chai_1.expect)(inputElement.textContent).to.be.equal("input-textContent");
            });
            it("inputElement should have value: 'input-value'", () => {
                (0, chai_1.expect)(inputElement.value).to.be.equal("input-value");
            });
            it("inputElement should have type: 'text'", () => {
                (0, chai_1.expect)(inputElement.type).to.be.equal("text");
            });
            it("inputElement should have placeholder: 'input-placeholder'", () => {
                (0, chai_1.expect)(inputElement.placeholder).to.be.equal("input-placeholder");
            });
            it("inputElement should have title: 'input-title'", () => {
                (0, chai_1.expect)(inputElement.title).to.be.equal("input-title");
            });
            it("inputElement should have maxLength: '8'", () => {
                (0, chai_1.expect)(inputElement.maxLength).to.be.equal(8);
            });
            it("inputElement should have min: '2'", () => {
                (0, chai_1.expect)(inputElement.min).to.be.equal("2");
            });
            it("inputElement should have title: 'input-title'", () => {
                (0, chai_1.expect)(inputElement.max).to.be.equal("4");
            });
            it("inputElement should have title: 'input-step'", () => {
                (0, chai_1.expect)(inputElement.step).to.be.equal("input-step");
            });
            it("inputElement should have title: 'input-pattern'", () => {
                (0, chai_1.expect)(inputElement.pattern).to.be.equal("input-pattern");
            });
            it("inputElement should be required", () => {
                (0, chai_1.expect)(inputElement.required).to.true;
            });
            it("inputElement should be disabled", () => {
                (0, chai_1.expect)(inputElement.disabled).to.true;
            });
            describe("test inputElemnt dataset", () => {
                it("inputElement should have data-columns: '2'", () => {
                    (0, chai_1.expect)(inputElement.dataset.columns).to.be.equal("2");
                });
                it("inputElement should have data-index-number: '2'", () => {
                    (0, chai_1.expect)(inputElement.dataset.indexNumber).to.be.equal("2");
                });
                it("inputElement should have data-value: '2'", () => {
                    (0, chai_1.expect)(inputElement.dataset.value).to.be.equal("2");
                });
            });
        });
        describe("test AnchorElement", () => {
            it("aElement should have target: 'target'", () => {
                (0, chai_1.expect)(aElement.target).to.be.equal("target");
            });
        });
        describe("test TableCellElement", () => {
            it("aElement should have colspan: '8'", () => {
                (0, chai_1.expect)(tdElement.colSpan).to.be.equal(8);
            });
        });
    });
});
//# sourceMappingURL=createElement.spec.js.map