import { cElement } from "./cElement";
import type { TAttribut } from "./TAttribut";
/**
 * to create a new ListItem in a table
 * @param html html is string what innerHTML should write
 * @attributs is an array of tow string (qualifiedName, value )
 */

/**
 *
 * @param parent a HTMLElement muss be a table to work
 * @param html string like innerHTML
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
