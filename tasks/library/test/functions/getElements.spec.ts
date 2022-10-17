import { getElements } from './../../src/lib/functions/getElements';
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
        
        const { window } = new JSDOM('<!doctype html><html><body><div class = "cls">John</div></body></html>');
        global.document = window.document;

        expect(getElements('.cls').length).to.be.equal(1)
        expect(getElements('.cls').length).not.to.be.equal(2)

    })

})