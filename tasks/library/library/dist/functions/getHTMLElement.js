"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__getHTMLElement = void 0;
/**
 * to Return a HTML Element of a tab, id or class
 * @param type class or id or nothing
 * @param element class or id name
 * @returns Return the HTMLElement
 */
const __getHTMLElement = (type = "", element) => {
    let speacialCharacter = "";
    switch (type) {
        case "id":
            speacialCharacter = "#";
            break;
        case "class":
            speacialCharacter = ".";
            break;
        default:
            speacialCharacter = "";
    }
    return document.querySelector(speacialCharacter + element);
};
exports.__getHTMLElement = __getHTMLElement;
//# sourceMappingURL=getHTMLElement.js.map