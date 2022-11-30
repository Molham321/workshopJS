export {};
/**
 * a type to setAttribute to HTMLElement
 * @param id is a Optional string to define element id
 * @param class is a Optional string to define element class
 * @param textContent is a Optional string to define element textContent
 * @param value is a Optional string to define element value
 * @param type is a Optional string to define element type
 */
type TAttribut = {
    id?: string;
    class?: string;
    textContent?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    title?: string;
    for?: string;
    maxlength?: string;
    target?: string;
    style?: string;
    list?: string;
    colspan?: string;
    contenteditable?: string;
    autocomplete?: string;
    min?: string;
    max?: string;
    step?: string;
    pattern?: string;
    required?: string;
    disabled?: string;
    "data-filtervalue"?: string;
    "data-value"?: string;
    "data-columns"?: string;
    "data-index-number"?: string;
    "data-parent"?: string;
};
export type { TAttribut };
