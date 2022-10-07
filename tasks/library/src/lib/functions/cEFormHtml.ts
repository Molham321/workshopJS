/**
 * to create HTML Element
 * @param html html script
 * @returns element
 * @example
 * const myList = __createElementFormHtml(`
 *  <ul>
 *      <li>dcode</li>
 * </ul>
 * document.body.appendChild(myList)
 * => new List on body document
 * `)
 */
export const cEFormHtml = (html: string) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
};
