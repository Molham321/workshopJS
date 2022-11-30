/* eslint-disable no-console */
import { CE } from "./../../functions/createElement";

export function test_CE() {
    function doSomething() {
        return 1+2;
    }
    const a = performance.now();
    CE({
        type: "div",
        attributs: {
            id: "id",
            class: "class"
        },
        events: {
            click: doSomething
        }
    });
    const b = performance.now();
    return b - a;
}

export function test_CEJS() {
    function doSomething() {
        return 1+2;
    }
    const a = performance.now();
    const div = document.createElement("div");
    div.id = "id";
    div.classList.add("class");
    div.addEventListener("click", doSomething);
    const b = performance.now();
    return b - a;
}