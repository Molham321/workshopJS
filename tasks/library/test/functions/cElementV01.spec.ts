import { cAElementV02 } from 'lib/functions';

import { expect } from "chai";
import "../index.ts";

/**
 * to create a new element in the document
 */
describe("test cElement function", () => {
  /**
   * test if the new element exists
   */
  it("to create HTML Element", () => {
    document.body.appendChild(
      cAElementV02({
        elementType: "div",
        innerHTML: "test from cElement",
        attributs: [
          { n: "class", v: "class" },
          { n: "id", v: "id" },
        ],
      })
    );

    expect(document.getElementById("id")).to.be.exist;
  });
});
