export type Tattribut = { qualifiedName: string; value: string };

export interface IElement {
  elementType: string;
  parent: HTMLElement;
  html?: string;
  id?: string;
  className?: string;
  attribut?: Tattribut[];
}
