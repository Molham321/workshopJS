import { getElements } from "./../../../../src/lib/functions/getElements";
import { JSDOM } from "jsdom";

let dom = new JSDOM(`
<!DOCTYPE html>
    <body>
        <div id = "div0"></div>
        <div id = "div1"></div>
        <div id = "div2"></div>
        <table id="table"></table>
    </body>
`);

test("to Return a HTML Element", () => {
  expect(getElements("div")).toBeDefined;
});
