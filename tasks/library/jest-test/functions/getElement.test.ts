import { getElement } from "../../src/lib/functions/getElement";

test("to Return a HTML Element", () => {
  expect(getElement("#div")).toBeDefined;
});
