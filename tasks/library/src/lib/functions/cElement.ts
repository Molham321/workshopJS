import { TElementV04 } from './../types/TElementV04';
/**
 * good!
 */



/**
 * to create and return a new HTMLElement with TElementV04
 * @param element a type of TElementV04 to give elements properties
 * @returns HTMLElemnt without appending!
 */
export const cElement = (element: TElementV04): HTMLElement => {
  const newElement = document.createElement(element.type);
  if(element.events) {
    element.events.forEach(e => {
      newElement.addEventListener(e.e, e.f);
    })
  }
  if(element.attributs) {
    element.attributs.forEach(attribut => {
      (attribut.n === "textContent") ? newElement.textContent = attribut.v : newElement.setAttribute(attribut.n, attribut.v)
    }) 
  }
  return newElement;
};
