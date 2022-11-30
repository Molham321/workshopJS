"use strict";
/**
 * Function.prototype.bind()
 * The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value,
 * with a given sequence of arguments preceding any provided when the new function is called
 * @example
 * const module = {
 * x: 42,
*  getX: function() {
 *  return this.x;
 *  }
 * };
 *
 * const unboundGetX = module.getX;
 * console.log(unboundGetX()); // The function gets invoked at the global scope
 * -> expected output: undefined
 *
 * const boundGetX = unboundGetX.bind(module);
 * console.log(boundGetX());
 * -> expected output: 42
 *
 * Summary:
 * bind() = Borrows a function, & creates a copy.
 * "this" keyword replaced with the object passed in as an argument
 * more on that below: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElements = exports.$$ = exports.getElement = exports.$ = void 0;
/**
 * to Return a HTMLElement like querySelector
 * @example
 * const mainContent = $('.main-content');
 */
// Version_01
exports.$ = document.querySelector.bind(document);
// Version_02
const getElement = (selectro) => {
    return document.querySelector(selectro);
};
exports.getElement = getElement;
/**
 * to Return a HTMLElements like querySelectorAll
 * @example
 * const externalLinks = $$('a[target="_blank"]');
 */
// Version_01
exports.$$ = document.querySelectorAll.bind(document);
// Version_02
const getElements = (selectro) => {
    return document.querySelectorAll(selectro);
};
exports.getElements = getElements;
//# sourceMappingURL=getElements.js.map