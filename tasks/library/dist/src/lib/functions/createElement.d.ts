import { TElement } from "../types/TElement";
/**
 * to create and return a new HTMLElement with TEV06 {type, events and attributs}
 * @param elements a type of TEV06 to give elements properties
 * @returns HTMLElemnt without appending!
 * @exampel
 * const container = $(".company-list-wrapper") as HTMLElement;
 * container.CE({ type: "ul" })
 */
export declare const CE: (...elements: TElement[]) => HTMLElement;
