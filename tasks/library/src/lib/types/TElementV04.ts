import { TEventV01 } from './TEventV01';
import { TAttributV01 } from "./TAttributV01";

/**
 * paramenter to give elements properties
 * @param type  a string like "div" or "li" etc..
 * @param events a array of type TEvent to addEventListener to the new element
 * @param attributs array of a type to set setAttribute or textContent
 */
export type TElementV04 = {
  type: string;
  events?: TEventV01[];
  attributs?: TAttributV01[];
};
