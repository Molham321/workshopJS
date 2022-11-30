/* eslint-disable no-console */
import "./../../functions/createElementPrototype";

export function test_CEP() {
    function doSomething() {
        return 1+2;
    }
    const container = document.querySelector(".company-list-wrapper") as HTMLElement;
    const a = performance.now();
    container.CEP({
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

export function test_CEPJS() {
    function doSomething() {
        return 1+2;
    }
    const container = document.querySelector(".company-list-wrapper") as HTMLElement;

    const a = performance.now();
    const div = document.createElement("div");
    div.id = "id";
    div.classList.add("class");
    div.addEventListener("click", doSomething);
    container.appendChild(div);
    const b = performance.now();

    return b - a;
}
