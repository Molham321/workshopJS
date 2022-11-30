import { CET } from "./../../functions/createElementTemplate";

export function test_CET() {
    const a = performance.now();
    CET(`
        <div id = "id" class = "class">
            <li>dcode</li>
        </div>
    `);
    const b = performance.now();
    return b - a;
}

export function test_CETJS() {
    const a = performance.now();
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    ul.appendChild(li);
    const b = performance.now();
    return b - a;
}
