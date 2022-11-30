import { TAttributV01 } from './../types/TAttributV01';
/**
 * bad! it works but you don't need it
 */

/**
 * to set one or more properties to a HTMLElement
 * @param element a HTMLElemnt where the new properties will be add it
 * @param Attribut a array of a type to setAttribute
 * @returns 
 */
export const setAttributes = (element: HTMLElement, Attribut: TAttributV01[]): HTMLElement => {
  Attribut.forEach((attribut) => {
    element.setAttribute(attribut.n, attribut.v);
  });
  return element;
};
