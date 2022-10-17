import { setAttributes } from './../../src/lib/functions/setAttributes';
import { expect } from "chai"
import { JSDOM } from 'jsdom'

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

describe("test getElements function", () => {
    it("to Return a HTML Elements", () => {
        
        const { window } = new JSDOM('<!doctype html><html><body><div>John</div></body></html>');
        global.document = window.document;

        const div = document.querySelector("div") as HTMLDivElement;

        setAttributes(div, [
            { qualifiedName: "id", value: "id" },
            { qualifiedName: "class", value: "class" },
        ]);

        expect(document.getElementById('id')?.id).to.be.equal("id");
        expect(document.getElementById('id')?.className).to.be.equal("class");
    })

})