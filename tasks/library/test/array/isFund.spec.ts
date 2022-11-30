
import { expect } from "chai";
import { isFund } from "./../../src/lib/array/isFund";

/**
 * searches for an item in an array and returns true if found
 */
describe("test isFund function", () => {
  /**
   * check if a value can be found in the array
   * https://mochajs.org/
   */
  it("return true or false", () => {
    const arr = [1, 3, 0, false, 2, "", 4, undefined, 5, NaN];
    
    expect(isFund(arr, 6)).to.be.false;
    expect(isFund(arr, 1)).to.be.true;
  });
});
