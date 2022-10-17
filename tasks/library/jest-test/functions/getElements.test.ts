import { getElements } from "../../src/lib/functions/getElements";

test("to Return a HTML Element", () => {
  expect(getElements("div")).toBeDefined;
});
