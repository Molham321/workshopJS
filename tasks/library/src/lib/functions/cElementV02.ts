import { TElementV04 } from './../types/TElementV04';
/**
 * bad!, there are better alternatives, see cElement.ts
 */


/**
 * to create and return a new HTMLElement with TElementV04
 * @param element a type of TElementV04 to give elements properties
 * @returns HTMLElemnt without appending!
 */
export const cElementV02 = (...elements: TElementV04[]): HTMLElement[] => {
  let elementsList: HTMLElement[] = [];
  elements.forEach(element => {
    const newElement = document.createElement(element.type) as HTMLElement;
    if(element.attributs) {
      element.attributs.forEach(attribut => {
        (attribut.n === "textContent") ? newElement.textContent = attribut.v : newElement.setAttribute(attribut.n, attribut.v);
      }) 
    }
    if(element.events) {
      element.events.forEach(e => {
        newElement.addEventListener(e.e, e.f);
      })
    }
    elementsList.push(newElement);
  })
  
  return elementsList;
};
