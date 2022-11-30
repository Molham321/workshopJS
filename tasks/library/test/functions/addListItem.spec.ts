
import { addListItem } from "./../../src/lib/functions/addListItem";
import { expect } from "chai";
import "../index.ts";

const div = document.getElementById("table") as HTMLElement;

/**
 * to add a new List Item to a table
 */
describe("test addListItem function", () => {
  /**
   * check if new ListItem exists
   */
  it("to add a new List Item to a table", () => {
    const newListItem = addListItem(div, "new_List_Item", [{ n: "class", v: "table" }]);
    expect(newListItem?.className).to.be.equal("table");
  });
});
