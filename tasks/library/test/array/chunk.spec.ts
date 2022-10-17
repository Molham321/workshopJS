import { chunk } from './../../src/lib/array/chunk';
import { assert } from "chai";

describe("test chunk function", () => {
  it("disassembled the array", () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4, 5];
    const arr3: any = [];

    const result1 = [[1, 2],[3, 4],];
    const result2 = [[1, 2], [3, 4], [5]];
    const result3: any = [];

    assert.deepEqual(chunk(arr1, 2),result1)
    assert.deepEqual(chunk(arr2, 2),result2)
    assert.deepEqual(chunk(arr3, 2),result3)
  })
});
