import { cElement } from "./cElement";
import type { TAttribut } from "./TAttribut";

/**
 * to add a new List Item to a table
 * @param parent a HTMLElement muss be a table to work
 * @param innerHTML string like innerHTML
 * @param attributs is an array of tow string (qualifiedName, value ) to add id, class , etc...
 * @returns neue <li>
 */
export const addListItem = (
  parent: HTMLElement,
  innerHTML: string,
  attributs?: TAttribut[]
): HTMLElement | void => {
  if (parent.nodeName == "TABLE") {
    return cElement({
      elementType: "li",
      innerHTML: innerHTML,
      attributs: attributs,
    });
  }
};
