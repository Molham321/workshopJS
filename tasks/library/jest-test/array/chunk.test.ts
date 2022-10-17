import { chunk } from "../../src/lib/array/chunk";

test("presumably disassembled the array", () => {
  const arr1 = [1, 2, 3, 4];
  const result1 = [
    [1, 2],
    [3, 4],
  ];
  const arr2 = [1, 2, 3, 4, 5];
  const arr3: any = [];
  const result2 = [[1, 2], [3, 4], [5]];
  expect(chunk(arr1, 2)).toEqual(result1);
  expect(chunk(arr2, 2)).toEqual(result2);
  expect(chunk(arr3, 2)).toEqual([]);

});
