import { setAttributes } from "../../src/lib/functions/setAttributes";
import { JSDOM } from "jsdom";
import type { TAttribut } from "../../src/lib/functions/TAttribut";

const dom = new JSDOM(`<!DOCTYPE html><div id = "cls">Hello world</p>`);
const div = dom.window._document.getElementById("cls");
const attributs: TAttribut[] = [
  { qualifiedName: "id", value: "id" },
  { qualifiedName: "class", value: "class" },
];
setAttributes(div, attributs);

test("add one or more attributs to element", () => {
  expect(div.className).toBe("class");
  expect(div.id).toBe("id");
});
