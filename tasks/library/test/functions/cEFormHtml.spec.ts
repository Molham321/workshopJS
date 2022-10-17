import { cEFormHtml } from './../../src/lib/functions/cEFormHtml';
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

describe("test cEFormHtml function", () => {
    it("to create HTML Element", () => {
        
        const { window } = new JSDOM('<!doctype html><html><body><div id = "cls"></div></body></html>');
        global.document = window.document;

        // const list = "1234"

        const myList: HTMLTemplateElement = cEFormHtml(`
        <ul>
            <li class = "listItem">dcode 1 from cEFormHtml</li>
        </ul>
        `);

        const div = document.getElementById("cls") as HTMLDivElement;
        div.appendChild(myList);

        expect(myList.parentElement!.id).to.be.equal(div.id);

    })

})