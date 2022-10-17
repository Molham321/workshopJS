import { addListItem } from "./../../src/lib/functions/addListItem";
import { expect } from "chai";
import { JSDOM } from "jsdom";

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
  }
}

const { window } = new JSDOM(
  '<!doctype html><html><body><table id = "table"></table></body></html>'
);
global.document = window.document;
const div = document.getElementById("table") as HTMLElement;

describe("test addListItem function", () => {
  it("to add a new List Item to a table", () => {
    const newListItem = addListItem(div, "new_List_Item", [
      { qualifiedName: "class", value: "table" },
    ]);
    expect(newListItem?.className).to.be.equal("table");
  });
});
