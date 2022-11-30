/**
 * createElementTemplate to create HTML Elements with innerHTML methode
 * @param html html script
 * @returns element
 * @example
 * const myList = __createElementFormHtml(`
 *  <ul>
 *      <li>dcode</li>
 * </ul>
 * `)
 * document.body.appendChild(myList)
 *
 */
export declare const CET: (html: string) => HTMLTemplateElement;
