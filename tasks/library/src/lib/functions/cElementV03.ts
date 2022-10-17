export class s {
  select: string;
  constructor(select: string) {
    this.select = select;
  }
}

/**
 * to create a new element in the document
 * @param elementType a sting z.b "div"
 * @param innerHTML a sting innerHTML z.b <p>HelloWorld</p>
 * @param textContent a sting textContent z.b HelloWorld
 * @param parent a HTMLElement to appendChild z.b doucment.body
 * @param attributs array of string tow string first one is the qualifiedName and the scound one is the value
 * @returns new HTMLElement element
 */
export const cElementV02 = (
  elementType: string,
  parent?: HTMLElement,
  innerHTML?: string,
  textContent?: string,
  ...attributs: any[]
): HTMLElement => {
  const newElement = document.createElement(elementType);
  if (innerHTML) newElement.innerHTML = innerHTML.trim();
  if (textContent) newElement.textContent = textContent;
  if (attributs) {
    attributs.forEach((a) => {
      newElement.setAttribute(a[0], a[1]);
    });
  }
  if (parent) parent.appendChild(newElement);
  return newElement;
};
