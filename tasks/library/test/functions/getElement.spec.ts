import { getElement } from './../../src/lib/functions/getElement';
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

describe("test getElement function", () => {
    it("to Return a HTML Element", () => {
        
        const { window } = new JSDOM('<!doctype html><html><body><div id = "cls"></div></body></html>');
        global.document = window.document;

        expect(getElement('#cls').id).to.be.equal("cls");

    })

})