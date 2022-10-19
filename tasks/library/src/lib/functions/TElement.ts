import type { TAttribut } from "./TAttribut";

export type TElement = {
  elementType: string;
  innerHTML?: string;
  textContent?: string;
  parent?: HTMLElement;
  attributs?: TAttribut[];
};

export type TElementV2 = {
  eleT: string;
  textContent?: string;
  // click?: Function;
  attributs?: TAttribut[];
};
