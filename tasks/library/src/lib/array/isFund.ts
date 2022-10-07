/**
 * searches for an item in an array and returns true if found
 * @param array an array
 * @param item any item
 * @returns ture or false
 */
export const isFund = (array: any[], item: any): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return true;
    }
  }
  return false;
};
