/**
 * to Return a HTML Element of a tab, id or class
 * @param type class or id or nothing
 * @param element class or id name
 * @returns Return the HTMLElement
 */
export const __getHTMLElement = (type: string = "", element: string): any => {
  let speacialCharacter = "";
  switch (type) {
    case "id":
      speacialCharacter = "#";
      break;
    case "class":
      speacialCharacter = ".";
      break;
    default:
      speacialCharacter = "";
  }
  return document.querySelector(speacialCharacter + element);
};
