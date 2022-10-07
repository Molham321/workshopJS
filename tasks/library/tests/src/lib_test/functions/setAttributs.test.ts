import { setAttributes } from "./../../../../src/lib/functions/setAttributes";
import { JSDOM } from "jsdom";
import type { TAttribut } from "../../../../src/lib/functions/TAttribut";

const dom = new JSDOM(`<!DOCTYPE html><div id = "cls1">Hello world</p>`);

const attributs: TAttribut[] = [
  { qualifiedName: "value", value: "value" },
  { qualifiedName: "id", value: "id" },
  { qualifiedName: "class", value: "class" },
  { qualifiedName: "placeholder", value: "placeholder" },
  { qualifiedName: "innterText", value: "innterText" },
];
const div2 = document.getElementById("cls1")!;

test("add one or more class name to element", () => {
  expect(setAttributes(div2, attributs)).toBeDefined;
});
