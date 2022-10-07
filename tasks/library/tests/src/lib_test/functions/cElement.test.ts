import { cElement } from "./../../../../src/lib/functions/cElement";
import { JSDOM } from "jsdom";
import type { TElement } from "../../../../src/lib/functions/TElement";

let dom = new JSDOM(`
<!DOCTYPE html>
<body>
</body>
`);

const element: TElement = {
  elementType: "div",
  html: "test from cElement",
  attributs: [
    { qualifiedName: "class", value: "class" },
    { qualifiedName: "id", value: "id" },
  ],
};

cElement(element);

dom.window._document.body.appendChild(element);

test("to create a new ListItem in a table", () => {
  expect(element).toBeDefined;
});
