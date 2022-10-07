import { setAttributes } from "./setAttributes";
import type { TElement } from "./TElement";

/**
 * to create a new element in the document
 * @param element a type of element
 * @returns we get a new element in a certain container with a certain class
 */
export const cElement = (element: TElement): HTMLElement => {
  const newElement = document.createElement(element.elementType);
  if (element.innerHTML) newElement.innerHTML = element.innerHTML.trim();
  if (element.id) newElement.id = element.id;
  if (element.class) newElement.classList.add(element.class);
  if (element.textContent) newElement.textContent = element.textContent;
  if (element.attributs) setAttributes(newElement, element.attributs);
  if (element.parent) element.parent.appendChild(newElement);
  return newElement;
};
