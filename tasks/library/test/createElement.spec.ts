import { expect, assert } from "chai";
import { JSDOM } from "jsdom";
import { CE } from "../src/lib/functions/createElement";

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
            </body>
        </html>`
);

global.document = window.document;

describe("test CE function", () => {

    function doSomething() {
        return 1 + 2;
    }

    const newDivElement = CE({
        type: "div",
        events: {
            click: doSomething,
        },
        attributs: {
            class: "class",
            id: "id",
        },
    });

    const a = CE({
        type: "a",
        attributs: {
            id: "a-id",
            target: "target"
        }
    });

    const td = CE({
        type: "td",
        attributs: {
            id: "td-id",
            colspan: "8"
        }
    });

    const formEle = CE({
        type: "form",
        attributs: {
            id: "form-id",
            autocomplete: "on"
        }
    });

    const input = CE({
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


    document.getElementById("id")?.appendChild(input);

    const inputElement = document.getElementById("input-id") as HTMLInputElement;
    const aElement = document.getElementById("a-id") as HTMLAnchorElement;
    const tdElement = document.getElementById("td-id") as HTMLTableCellElement;
    const formElement = document.getElementById("form-id") as HTMLFormElement;



    it("should create a new HTMLElement", () => {
        expect(newDivElement).to.be.exist;
    });

    describe("test function doSomething()", () => {

        const result = doSomething();

        it("doSomthing should return 3", () => {
            assert.equal(result, 3);
        });

        it("doSomething should return type number", () => {
            assert.typeOf(result, "number");
        });

        it("doSomething should return number above 2", () => {
            assert.isAbove(result, 2);
        });

    });

    describe("test HTMLElements ", () => {

        describe("test HTMLElements Type", () => {
            it("inputElement should be a type of HTMLInputElement", () => {
                assert.typeOf(inputElement, "HTMLInputElement");
            });
            it("inputElement should be a type of HTMLAnchorElement", () => {
                assert.typeOf(aElement, "HTMLAnchorElement");
            });
            it("inputElement should be a type of HTMLTableCellElement", () => {
                assert.typeOf(tdElement, "HTMLTableCellElement");
            });
            it("inputElement should be a type of HTMLFormElement", () => {
                assert.typeOf(formElement, "HTMLFormElement");
            });
        });

        describe("test inputElement attributes", () => {
            it("inputElement should have id: 'input-id'", () => {
                expect(inputElement.id).to.be.equal("input-id");
            });
            it("inputElement should have class: 'input-class'", () => {
                expect(inputElement.className).to.be.equal("input-class");
            });
            it("inputElement should have textContent =: 'input-textContent'", () => {
                expect(inputElement.textContent).to.be.equal("input-textContent");
            });
            it("inputElement should have value: 'input-value'", () => {
                expect(inputElement.value).to.be.equal("input-value");
            });
            it("inputElement should have type: 'text'", () => {
                expect(inputElement.type).to.be.equal("text");
            });
            it("inputElement should have placeholder: 'input-placeholder'", () => {
                expect(inputElement.placeholder).to.be.equal("input-placeholder");
            });
            it("inputElement should have title: 'input-title'", () => {
                expect(inputElement.title).to.be.equal("input-title");
            });
            it("inputElement should have maxLength: '8'", () => {
                expect(inputElement.maxLength).to.be.equal(8);
            });
            it("inputElement should have min: '2'", () => {
                expect(inputElement.min).to.be.equal("2");
            });
            it("inputElement should have title: 'input-title'", () => {
                expect(inputElement.max).to.be.equal("4");
            });
            it("inputElement should have title: 'input-step'", () => {
                expect(inputElement.step).to.be.equal("input-step");
            });
            it("inputElement should have title: 'input-pattern'", () => {
                expect(inputElement.pattern).to.be.equal("input-pattern");
            });
            it("inputElement should be required", () => {
                expect(inputElement.required).to.true;
            });
            it("inputElement should be disabled", () => {
                expect(inputElement.disabled).to.true;
            });

            describe("test inputElemnt dataset", () => {
                it("inputElement should have data-columns: '2'", () => {
                    expect(inputElement.dataset.columns).to.be.equal("2");
                });
                it("inputElement should have data-index-number: '2'", () => {
                    expect(inputElement.dataset.indexNumber).to.be.equal("2");
                });
                it("inputElement should have data-value: '2'", () => {
                    expect(inputElement.dataset.value).to.be.equal("2");
                });
            });
        });

        describe("test AnchorElement", () => {
            it("aElement should have target: 'target'", () => {
                expect(aElement.target).to.be.equal("target");
            });
        });

        describe("test TableCellElement", () => {
            it("aElement should have colspan: '8'", () => {
                expect(tdElement.colSpan).to.be.equal(8);
            });
        });

    });
});
