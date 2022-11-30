"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CE = create Element is a HTMLElement prototype to create new HTMLElement in the document
 * @param elements is a optional rest paramenter to give elements properties like type, attributs or events
 */
HTMLElement.prototype.CEP = function (...elements) {
    elements.forEach((element) => {
        const newElement = document.createElement(element.type);
        // check if there any attributs
        if (element.attributs) {
            const entries = Object.entries(element.attributs); // get all entries (key: value) als array
            entries.forEach(entrie => {
                switch (entrie[0]) { // entrie[1] = value
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
            const entries = Object.entries(element.events); // get all entries (key: value) als array
            entries.forEach(entrie => {
                if (typeof entrie[1] === "function") { // check if the user give a function
                    newElement.addEventListener(entrie[0], entrie[1]); // entrie[0] = key
                }
                else { // entrie[1] = value
                    throw new Error("Error: the events property must get/call a function as a parameter");
                }
            });
        }
        this.appendChild(newElement);
    });
    return this.lastChild;
};
//# sourceMappingURL=createElementPrototype.js.map