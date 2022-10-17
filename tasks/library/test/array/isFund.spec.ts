import { expect } from 'chai';
import { isFund } from './../../src/lib/array/isFund';

describe("test isFund function", () => {
  it("return true or false", () => {
    const arr = [1, 3, 0, false, 2, "", 4, undefined, 5, NaN];
    expect(isFund(arr, 6)).to.be.false;
    expect(isFund(arr, 1)).to.be.true;
  })

});
