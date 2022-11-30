export {};
import { TEvent } from "./TEvent";
import { TAttribut } from "./TAttribut";
/**
 * paramenter to give elements properties
 * @param type  a string like "div" or "li" etc..
 * @param events a Optional object to addEventListener to the new element
 * @param attributs a Optional object to  setAttribute to the new element
 */
type TElement = {
    type: string;
    events?: TEvent;
    attributs?: TAttribut;
};
export type { TElement };
