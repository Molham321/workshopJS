import { addClassName } from "./../../../../src/lib/functions/addClassName";
import { JSDOM } from "jsdom";

const dom = new JSDOM(`<!DOCTYPE html><div id = "cls">Hello world</p>`);
const div = dom.window._document.getElementById("cls");
addClassName(div, "class1", "class2");
test("add one or more class name to element", () => {
  expect(div.className).toBe("class1 class2");
});
