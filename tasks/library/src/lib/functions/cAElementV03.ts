/**
 * bad! there are better alternatives, see cAElementV04.ts
 * @param attributs bad, because with attributes you can give more than two any values
 * @param textContent you don't need it, you can summarize it with attributes
 * @param parent you don't need to append
 */

/**
 * to create a new element without Type Property in the document
 * @param elementType a sting z.b "div"
 * @param parent a HTMLElement to appendChild z.b doucment.body
 * @param textContent a sting textContent z.b HelloWorld
 * @param attributs array of string tow string first one is the qualifiedName and the scound one is the value
 * @returns new HTMLElement element
 */

export const cAElementV03 = ( elementType: string, parent?: HTMLElement, textContent?: string, ...attributs: any[]): HTMLElement => {
  const newElement = document.createElement(elementType);
  if (textContent) newElement.textContent = textContent;
  if (attributs){
    attributs.forEach((a) => {
      newElement.setAttribute(a[0], a[1]);
    });
  }
  if (parent) parent.appendChild(newElement);
  return newElement;
};
