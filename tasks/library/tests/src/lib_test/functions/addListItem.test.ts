import { addListItem } from "./../../../../src/lib/functions/addListItem";
import { JSDOM } from "jsdom";

const dom = new JSDOM(`
<!DOCTYPE html>
    <div id = "div"></div>
    <table id="table"></table>
`);

const table = dom.window._document.getElementById("table");
const div = dom.window._document.getElementById("div");
test("to create a new ListItem in a table", () => {
  expect(
    addListItem(table, "List Item", [
      { qualifiedName: "id", value: "id" },
      { qualifiedName: "class", value: "class" },
    ])
  ).toBeDefined;
  expect(
    addListItem(div, "List Item", [
      { qualifiedName: "id", value: "id" },
      { qualifiedName: "class", value: "class" },
    ])
  ).toBeNull;
});
