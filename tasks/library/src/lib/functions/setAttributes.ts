import type { TAttribut } from './TAttribut';

export const setAttributes = (
  element: HTMLElement,
  Attribut: TAttribut[],
): HTMLElement => {
  Attribut.forEach((attribut) => {
    element.setAttribute(attribut.qualifiedName, attribut.value);
  });

  return element;
};
