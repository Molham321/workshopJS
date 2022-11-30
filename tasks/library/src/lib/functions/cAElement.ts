import { setAttributes } from './setAttributes';
import { TElementV02 } from './../types/TElementV02';
/**
 * bad! it does not work, Canceled because extends HTMLElement is very complex
 */


export class cAElement extends HTMLElement {
  private selector: string | HTMLElement;

  element: HTMLElement;
  constructor(selector: string | HTMLElement) {
    super();
    this.selector = selector;
    if (typeof selector === "string") {
      this.element = document.createElement(selector);
    } else {
      this.element = selector;
    }
  }

  getSelector() {
    return this.selector;
  }

  setSelector(_selector: string) {
    this.selector = _selector;
  }

  getHTMLElement() {
    return this.element;
  }

  getParent() {
    return this.element.parentElement;
  }

  elementAppendToBody() {
    document.body.appendChild(this.element);
  }

  ccAppend(...element: TElementV02[]) {
    element.forEach((element) => {
      const newChild = new cAElement(element.eleT);
      // if (e.click) {e.addEventListener("click", e.click);}
      if (element.textContent) newChild.textContent = element.textContent;
      if (element.attributs) {
        setAttributes(newChild, element.attributs);
      }
      console.log(this.getHTMLElement());
      this.getHTMLElement().appendChild(newChild);
    });
    return new cAElement(element[0].eleT);
    // return this;
  }
}
