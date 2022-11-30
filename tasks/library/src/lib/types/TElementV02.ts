
import type { TAttributV01 } from "./TAttributV01";

/**
 * paramenter to give elements properties
 * @param eleT a string like "div" or "li" etc..
 * @param textContent  a string to set textContent to a new element
 * @param attributs array of a type to set setAttribute or textContent
 */

/**
 * @param textContent can be realized with if statement by @param attribute
 */
export type TElementV02 = {
  eleT: string;
  textContent?: string;
  attributs?: TAttributV01[];
};