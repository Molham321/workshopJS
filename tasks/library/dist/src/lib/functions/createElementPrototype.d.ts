import { TElement } from "../types/TElement";
export {};
declare global {
    interface HTMLElement {
        CEP(...elements: TElement[]): HTMLElement;
    }
}
