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
export const CET = (html: string): HTMLTemplateElement => {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild as HTMLTemplateElement;
};
