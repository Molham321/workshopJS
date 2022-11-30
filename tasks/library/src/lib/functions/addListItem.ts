
/**
 * bad! it works but you don't need it
 */

import { cAElementV02 } from "./cAElementV02";
import { TAttributV01 } from './../types/TAttributV01';


/**
 * to add a new List Item to a table
 * @param parent a HTMLElement muss be a table to work
 * @param innerHTML string like innerHTML
 * @param attributs is an array of tow string (qualifiedName, value ) to add id, class , etc...
 * @returns neue <li>
 */
export const addListItem = ( parent: HTMLElement, innerHTML: string, attributs?: TAttributV01[]): HTMLElement | void => {
  if (parent.nodeName == "TABLE") {
    return cAElementV02({
      elementType: "li",
      innerHTML: innerHTML,
      attributs: attributs
    });
  }
};
