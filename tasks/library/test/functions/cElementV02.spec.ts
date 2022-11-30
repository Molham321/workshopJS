import { cAElementV03 } from './../../src/lib/functions/cAElementV03';


import { expect } from "chai";
import "../index.ts";

describe("test cElementV02 function", () => {
  it("to create HTML Element", () => {
    const div = cAElementV03(
      "div",
      document.body,
      "test from cElement",
      "textContet",
      ["class", "class2"],
      ["id", "id1"]
    );

    expect(document.getElementById("id1")?.className).to.be.equal(
      div.className
    );
  });
});
