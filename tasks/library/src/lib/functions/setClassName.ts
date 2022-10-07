/**
 * set one or more class name to element
 * @param element a HTMLElement
 * @param classNames an Array of all class Name
 *
 */
export const setClassName = (
  element: HTMLElement,
  ...classNames: string[]
): void => {
  if (element) {
    classNames.forEach((classname) => {
      element.classList.add(classname);
    });
  }
};
