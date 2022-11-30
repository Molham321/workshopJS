/**
 * add one or more class name to element
 * @param element a HTMLElement
 * @param classNames an Array of all class Name
 * @example
 * const div = document.createElement('div');
 * addClassName(div, "class1", "class2");
 */
export const addClassName = (
    element: HTMLElement,
    ...classNames: string[]
): void => {
    if (element) {
        classNames.forEach((classname) => {
            element.classList.add(classname);
        });
    }
};