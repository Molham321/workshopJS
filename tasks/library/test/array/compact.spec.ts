import { compact } from './../../src/lib/array/compact';
import { assert } from "chai";

describe("test compact function", () => {
  it("remove all falsey values from the array ", () => {
    const arr1 = [1, 3, 0, false, 2, "", 4, undefined, 5, NaN];
    const result1 = [1,3,2,4,5];

    assert.deepEqual(compact(arr1),result1)
  })
});
