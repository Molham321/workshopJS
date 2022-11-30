import { TElementV04 } from './../types/TElementV04';
/**
 * bad! see cAElementV04
 */

export {};

declare global {
  interface HTMLElement {
    cElementV03(...elements: TElementV04[]): HTMLElement;
    // cElementV03(...elements: HTMLElement[]): HTMLElement;
  }
}

/**
 * CE = create Element is a HTMLElement prototype to create new HTMLElement in the document
 * @param elements is a optional rest paramenter to give elements properties
 */
// todo if (elements == TElementV04 => .. || HTMLElement => appendChild  )
HTMLElement.prototype.cElementV03 = function (...elements: TElementV04[]): HTMLElement {
  elements.forEach((element) => {
    const newElement = document.createElement(element.type) as HTMLElement;
    if (element.attributs) {
      element.attributs.forEach((attribut) => {
        if (attribut.n === "textContent") newElement.textContent = attribut.v;
        else newElement.setAttribute(attribut.n, attribut.v);
      });
    }
    
    if (element.events) {
      element.events.forEach((e) => {
        newElement.addEventListener(e.e, e.f);
      });
    }
  });
  return this.lastChild as HTMLElement;
};
