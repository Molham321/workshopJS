import { getElement } from "./../../../../src/lib/functions/getElement";
import { JSDOM } from "jsdom";

let dom = new JSDOM(`
<!DOCTYPE html>
    <body>
        <div id = "div"></div>
        <table id="table"></table>
    </body>
`);

test("to Return a HTML Element", () => {
  expect(getElement("#div")).toBeDefined;
});
