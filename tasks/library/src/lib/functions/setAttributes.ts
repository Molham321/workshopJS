export type Attribut = {
  qualifiedName: string;
  value: string;
};

//todo: .....
// export const __setAttributes = (
//   element: HTMLElement,
//   ...Attribut: Attribut[]
// ): void => {
//   Attribut.forEach((Attribut) => {
//     element.setAttribute(Attribut.qualifiedName, Attribut.value);
//   });
// };

/**
 * set one or more class name to element
 * @param element a HTMLElement
 * @param classNames an Array of all class Name
 *
 */
export const __setClassName = (
  element: HTMLElement,
  ...classNames: string[]
): void => {
  classNames.forEach((classname) => {
    element.classList.add(classname);
  });
};
