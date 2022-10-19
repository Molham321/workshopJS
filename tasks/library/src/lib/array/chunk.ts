/**
 * Creates an array of elements split into groups the lenght of site.
 * If array can't be split evenly, the final chunk will be the remaining element
 * @param {Array} array The array to process
 * @param {number} size the length of each chunk
 * @returns {Array} Return the neue array of chunks
 * @example
 * __chunk([1, 2, 3, 4, 5], 2):
 * // => [[1, 2], [3, 4], [5]]
 */
 export const chunk = (array: any[], size = 1): any[] => {
  if (!Array.isArray(array) || !array.length) return[];
  let result: any[] = [];
  let index: number = 0;
  while (index < array.length) {
    result.push(array.slice(index, (index += size)));
  }
  return result;
};