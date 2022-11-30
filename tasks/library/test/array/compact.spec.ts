
import { compact } from "./../../src/lib/array/compact";
import { assert } from "chai";

/**
 * Creates an array with all falsey values removed.
 * The values 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey
 */
describe("test compact function", () => {
  /**
   * Check if array before equals array after using compact function
   * https://mochajs.org/
   */
  it("remove all falsey values from the array ", () => {
    const arr1 = [1, 3, 0, false, 2, "", 4, undefined, 5, NaN];
    const result1 = [1, 3, 2, 4, 5];

    assert.deepEqual(compact(arr1), result1);
  });
});
