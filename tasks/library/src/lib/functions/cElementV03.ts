import { setAttributes } from "./setAttributes";
import { TElementV2 } from "./TElement";

export class CC {
  public selector: string;
  element: HTMLElement;
  constructor(selector: string) {
    this.selector = selector;
    this.element = document.createElement(this.selector);
  }

  public addChild = (child: CC) => {
    return child;
  };

  public getParent = () => {
    return this.element.parentElement;
  };

  public find = (search: string) => {
    return this.getHTMLElement().querySelectorAll(search);
  };

  public ccAppend = () => {
    document.body.appendChild(this.element);
    return this;
  };

  public getHTMLElement = () => {
    return this.element;
  };

  public ccAppendChild = (...element: TElementV2[]) => {
    element.forEach((e) => {
      const newChild = document.createElement(e.eleT);
      // if (e.click) {e.addEventListener("click", e.click);}
      if (e.textContent) newChild.textContent = e.textContent;
      if (e.attributs) {
        setAttributes(newChild, e.attributs);
      }

      this.getHTMLElement().appendChild(newChild);
    });

    return this;
  };
}
