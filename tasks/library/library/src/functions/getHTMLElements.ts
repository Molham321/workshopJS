/**
 * to Return a HTML Element of a tab, id or class
 * @param type class or id or nothing
 * @param element class or id or tag name
 * @returns Return the HTMLElements
 */
export const __getHTMLElements = (type: string = "", element: string): any => {
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
  return document.querySelectorAll(speacialCharacter + element);
};
