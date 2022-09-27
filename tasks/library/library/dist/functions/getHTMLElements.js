"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__getHTMLElements = void 0;
/**
 * to Return a HTML Element of a tab, id or class
 * @param type class or id or nothing
 * @param element class or id or tag name
 * @returns Return the HTMLElements
 */
const __getHTMLElements = (type = "", element) => {
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
    return document.querySelectorAll(speacialCharacter + element);
};
exports.__getHTMLElements = __getHTMLElements;
//# sourceMappingURL=getHTMLElements.js.map