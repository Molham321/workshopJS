
import type { TAttributV01 } from "./TAttributV01";

/**
 * paramenter to give elements properties
 * @param elementType a string like "div" or "li" etc..
 * @param innerHTML a string to set innerHTML to a new element
 * @param textContent  a string to set textContent to a new element
 * @param parent  a HTMLElement to appendchild
 * @param attributs array of a type to set setAttribute or textContent
 */

/**
 * bad style because @param innerHTML can never be used because we can define attributes
 * @param textContent can be realized with if statement by @param attribute
 * @param parent doesn't really matter because we only want to create an HTMLElement 
 */
export type TElementV01 = {
  elementType: string;
  innerHTML?: string;
  textContent?: string;
  parent?: HTMLElement;
  attributs?: TAttributV01[];
};