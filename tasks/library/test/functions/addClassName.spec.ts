
import { addClassName } from "./../../src/lib/functions/addClassName";
import { expect } from "chai";
import "../index.ts";

const div = document.getElementById("cls") as HTMLElement;

/**
 * add one or more class name to element
 */
describe("test addClassName function", () => {
  /**
   * test if "className" exists in the HTMLElement after executing the addClassName function
   */
  it("add one class name to element", () => {
    addClassName(div);
    expect(div.className).to.be.equal("");
  });

  /**
   * test if "className" exists in the HTMLElement after executing the addClassName function
   */
  it("add one class name to element", () => {
    addClassName(div, "class1");
    expect(div.className).to.be.equal("class1");
  });

  /**
   * test if "className" exists in the HTMLElement after executing the addClassName function
   */
  it("add one or more class name to element", () => {
    addClassName(div, "class1", "class2");
    expect(div.className).to.be.equal("class1 class2");
  });
});
