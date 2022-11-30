import { setAttributes } from './setAttributes';
import { TElementV01 } from './../types/TElementV01';
/**
 * bad! there are better alternatives, see cAElementV04.ts
 * @param element.innerHTML you don't need it, you can use attributes
 * @param element.textContent you don't need it, you can summarize it with attributes
 * @param element.parent you don't need to append
 */


/**
 * to create a new element with TElementV01 in the document
 * @param element a type of element
 * @returns we get a new element in a certain container with a certain class
 */
export const cAElementV02 = (element: TElementV01): HTMLElement => {
  const newElement = document.createElement(element.elementType);
  if (element.innerHTML) newElement.innerHTML = element.innerHTML.trim();
  if (element.textContent) newElement.textContent = element.textContent;
  if (element.attributs) setAttributes(newElement, element.attributs);
  if (element.parent) element.parent.appendChild(newElement);
  return newElement;
};
