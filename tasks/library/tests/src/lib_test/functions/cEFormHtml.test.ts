import { cEFormHtml } from "./../../../../src/lib/functions/cEFormHtml";
import { JSDOM } from "jsdom";

let dom = new JSDOM(`
<!DOCTYPE html>
<body>
</body>
`);

const myList = cEFormHtml(`
  <ul>
    <li>dcode from cEFormHtml</li>
  </ul>
`);

dom.window._document.body.appendChild(myList);

test("to create HTML Element", () => {
  expect(myList).toBeDefined;
});
