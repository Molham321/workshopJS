"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClassName = void 0;
/**
 * add one or more class name to element
 * @param element a HTMLElement
 * @param classNames an Array of all class Name
 * @example
 * const div = document.createElement('div');
 * addClassName(div, "class1", "class2");
 */
const addClassName = (element, ...classNames) => {
    if (element) {
        classNames.forEach((classname) => {
            element.classList.add(classname);
        });
    }
};
exports.addClassName = addClassName;
//# sourceMappingURL=addClassName.js.map