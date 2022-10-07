import { isFund } from "./../../../../src/lib/array/isFund";

test("presumably disassembled the array", () => {
  const arr = [1, 3, 0, false, 2, "", 4, undefined, 5, NaN];
  expect(isFund(arr, 6)).toBe(false);
  expect(isFund(arr, 1)).toBe(true);
});
