/**
 * to Return a HTML Element of a tab, id or class
 * @param element class or id or tag name
 * @returns Return the HTMLElements
 * @example
 * console.log(__getHTMLElements('div'));
 * // => NodeList()
 * console.log(__getHTMLElements('.cls'));
 * // => NodeList()
 */
export const getElements = (element: string): NodeList => {
  return document.querySelectorAll(element) as NodeList;
};
