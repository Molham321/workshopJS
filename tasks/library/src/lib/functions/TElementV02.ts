import type { TAttribut } from "./TAttribut";

export type TElementV02 = {
  elementType: string;
  innerHTML?: string;
  textContent?: string;
  parent?: HTMLElement;
  attributs?: TAttribut[];
};
