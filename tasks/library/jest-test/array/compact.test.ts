import { compact } from "../../src/lib/array/compact";
test("Creates an array with all falsey values removed", () => {
  const arr = [1, 3, 0, false, 2, "", 4, undefined, 5, NaN];
  const result = [1, 3, 2, 4, 5];
  expect(compact(arr)).toEqual(result);
});
