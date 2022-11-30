/* eslint-disable no-console */
import { $ } from "./../../functions/getElements";

export function test_$() {
    const a = performance.now();
    $(".company-list-wrapper") as HTMLElement;
    // eslint-disable-next-line no-console
    const b = performance.now();
    return b - a;
}

export function test_querySelector() {
    const a = performance.now();
    document.querySelector(".company-list-wrapper") as HTMLElement;
    const b = performance.now();
    return b - a;
}