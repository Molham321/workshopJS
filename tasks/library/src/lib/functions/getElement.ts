/**
 * to Return a HTML Element of a tab, id or class like querySelector do
 * @param element .class or #id name
 * @returns Return the HTMLElement if the element not found return null
 * @example
 * console.log(__getHTMLElement('div'));
 * // => <div></div>
 * console.log(__getHTMLElement('.cls'));
 * // => <div class = "cls"></div>
 * console.log(__getHTMLElement('#subcls1'));
 * // => <div id = "subcls1"></div>
 */
export const getElement = (element: string): HTMLElement => {
  return document.querySelector(element) as HTMLElement;
};
