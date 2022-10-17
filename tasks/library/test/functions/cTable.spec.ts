import { cTable } from './../../src/lib/functions/cTable';
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

describe("test cTable function", () => {
    it("to create a new table in the document", () => {
        
        const { window } = new JSDOM('<!doctype html><html><body><div id = "cls"></div></body></html>');
        global.document = window.document;

        const data = [
        { name: "James", age: 21, country: "US" },
        { name: "Rony", age: 31, country: "DE" },
        { name: "Max", age: 22, country: "SP" },
        { name: "Mark", age: 25, country: "CA" },
        ];
        const parent3 = document.body;
        const columns = ["name", "age", "country"];
        const className = "table";
        const id = "table";
        cTable(parent3, columns, data, className, id);

        expect(document.getElementsByTagName('table')).to.be.exist;
    })
})