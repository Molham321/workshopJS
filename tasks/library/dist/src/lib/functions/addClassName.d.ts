/**
 * add one or more class name to element
 * @param element a HTMLElement
 * @param classNames an Array of all class Name
 * @example
 * const div = document.createElement('div');
 * addClassName(div, "class1", "class2");
 */
export declare const addClassName: (element: HTMLElement, ...classNames: string[]) => void;
