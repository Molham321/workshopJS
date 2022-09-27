/**
 * to create a new element in the document
 * @param elementType "element type" is a string e.g. 'div'
 * @param parent "parent" is an HTML element
 * @param html html is string what innerHTML should write
 * @param className is string, a class name
 * @returns we get a new element in a certain container with a certain class
 */
declare const __mackDiv: (elementType: string, parent: HTMLElement, html: string, className: string) => HTMLElement;
export { __mackDiv };
