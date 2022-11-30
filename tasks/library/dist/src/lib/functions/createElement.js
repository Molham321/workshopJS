"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CE = void 0;
/**
 * to create and return a new HTMLElement with TEV06 {type, events and attributs}
 * @param elements a type of TEV06 to give elements properties
 * @returns HTMLElemnt without appending!
 * @exampel
 * const container = $(".company-list-wrapper") as HTMLElement;
 * container.CE({ type: "ul" })
 */
const CE = (...elements) => {
    // create a new HTMLElement List
    const elementsList = [];
    elements.forEach((element) => {
        // create a new HTMLElement
        const newElement = document.createElement(element.type);
        // check if there any attributs
        if (element.attributs) {
            const entries = Object.entries(element.attributs); // get all entries (key: value) als array
            entries.forEach((entrie) => {
                switch (entrie[0]) {
                    case "textContent":
                        newElement.textContent = entrie[1];
                        break;
                    case "style":
                        newElement.style.cssText = entrie[1];
                        break;
                    default:
                        newElement.setAttribute(entrie[0], entrie[1]);
                        break;
                }
            });
        }
        // check if there any events
        if (element.events) {
            const entries = Object.entries(element.events);
            entries.forEach((entrie) => {
                newElement.addEventListener(entrie[0], entrie[1]);
            });
        }
        elementsList.push(newElement);
    });
    // return the last HTMLElement
    return elementsList[elementsList.length - 1];
};
exports.CE = CE;
//# sourceMappingURL=createElement.js.map