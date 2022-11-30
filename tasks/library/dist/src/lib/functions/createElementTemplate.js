"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CET = void 0;
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
const CET = (html) => {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
};
exports.CET = CET;
//# sourceMappingURL=createElementTemplate.js.map