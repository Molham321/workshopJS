/* eslint-disable no-console */
import { addClassName } from "./../../functions/addClassName";

export function test_addClassName() {
    const div = document.querySelector(".company-list-wrapper") as HTMLElement;
    const a = performance.now();
    addClassName(div, "class1", "class2");
    const b = performance.now();
    return b - a;
}

export function test_classList_add() {
    const div = document.querySelector(".company-list-wrapper") as HTMLElement;
    const a = performance.now();
    div.classList.add("class1", "class2");
    const b = performance.now();
    return b - a;
}