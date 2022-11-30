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
/**
 * to Return a HTMLElement like querySelector
 * @example
 * const mainContent = $('.main-content');
 */
export declare const $: any;
export declare const getElement: (selectro: string) => Element;
/**
 * to Return a HTMLElements like querySelectorAll
 * @example
 * const externalLinks = $$('a[target="_blank"]');
 */
export declare const $$: any;
export declare const getElements: (selectro: string) => NodeListOf<Element>;
