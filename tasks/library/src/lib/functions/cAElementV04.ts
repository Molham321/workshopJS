import { TElementV04 } from './../types/TElementV04';
/**
 * good
 */

export {};

declare global {
  interface HTMLElement {
    cAElementV04(...elements: TElementV04[]): HTMLElement;
    // cAElementV03(...elements: HTMLElement[]): HTMLElement;
  }
}

/**
 * cAElementV03 is a HTMLElement prototype to create and append new HTMLElement in the document
 * @param elements is a optional rest paramenter to give elements properties
 */
// todo if (elements == TElementV04 => .. || HTMLElement => appendChild  )
HTMLElement.prototype.cAElementV04 = function (...elements: TElementV04[]): HTMLElement {
  if(typeof elements === "object") {
    elements.forEach((element) => {
      const newElement = document.createElement(element.type) as HTMLElement;
      if (element.attributs) {
        element.attributs.forEach((attribut) => {
          if (attribut.n === "textContent") newElement.textContent = attribut.v;
          else newElement.setAttribute(attribut.n, attribut.v);
        });
      }
      if(element.events) {
        element.events.forEach(e => {
          newElement.addEventListener(e.e, e.f);
        })
      }
      this.appendChild(newElement);
    });
  } else {
    console.log(typeof elements);
    this.appendChild(elements);
  }

  return this.lastChild as HTMLElement;
};
