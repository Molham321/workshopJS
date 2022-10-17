import type { TAttribut } from "./TAttribut";

export type TElement = {
  elementType: string;
  innerHTML?: string;
  textContent?: string;
  parent?: HTMLElement;
  attributs?: TAttribut[];
};
