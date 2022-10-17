
import { JSDOM } from "jsdom";
import { cElement } from "../../src/lib/functions/cElement";
import type { TElement } from "../../src/lib/functions/TElement";

const dom = new JSDOM(`<!DOCTYPE html><div id = "cls">Hello world</p>`);
const div = dom.window._document.getElementById("cls");

const element: TElement = {
  elementType: "div",
  innerHTML: "test from cElement",
  parent: div,
  attributs: [
    { qualifiedName: "class", value: "class" },
    { qualifiedName: "id", value: "id" },
  ],
};
cElement(element);

  test("to create a new ListItem in a table", () => {
    expect(element).toBeDefined;
  });








