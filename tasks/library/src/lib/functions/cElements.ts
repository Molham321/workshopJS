import type { IElement } from './iElement';

/**
 * to create a new element in the document
 * @param IElement[] is an array of interface (elementType, parent, html, className)
 * @returns we get a new element in a certain container with a certain class
 * @example
 * __makeDiv(elementTyp, parent, html, className);
 * // => new element will be create
 */
export const cElements = (elements: IElement[]): void => {
  for (let i = 0; i < elements.length; i++) {
    const newElement = document.createElement(elements[i].elementType);
    if (elements[i].className)
      newElement.classList.add(elements[i].className as string);
    if (elements[i].html) newElement.innerHTML = elements[i].html as string;
    if (elements[i].id) newElement.id = elements[i].id as string;
    elements[i].parent.appendChild(newElement);
  }
};
