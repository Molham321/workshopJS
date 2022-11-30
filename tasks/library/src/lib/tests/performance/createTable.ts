import { CT } from "./../../functions/createTable";

export function test_CT() {
    const data = [
        { name: "James",
            age: 21,
            country: "US" },
        { name: "Rony",
            age: 31,
            country: "DE" },
        { name: "Max",
            age: 22,
            country: "SP" },
        { name: "Mark",
            age: 25,
            country: "CA" },
    ];
    const parent = document.body;
    const columns = ["name", "age", "country"];
    const className = "table";
    const id = "table";
    const a = performance.now();
    CT(parent, columns, data, className, id);
    const b = performance.now();
    return b - a;
}

export function test_CTJS() {
    const data = [
        { name: "James",
            age: 21,
            country: "US" },
        { name: "Rony",
            age: 31,
            country: "DE" },
        { name: "Max",
            age: 22,
            country: "SP" },
        { name: "Mark",
            age: 25,
            country: "CA" },
    ];
    const parent = document.body;
    const columns = ["name", "age", "country"];

    const a = performance.now();
    const table = document.createElement("table");
    table.classList.add("table");
    table.id = "table";

    table.appendChild(document.createElement("thead"));
    table.querySelector("thead")?.appendChild(document.createElement("tr"));

    for (let i = 0; i < columns.length; i++) {
        const heading = document.createElement("td");
        heading.textContent = columns[i];
        table.querySelector("thead tr")?.appendChild(heading);
    }

    data.forEach((data) => {
        const row = document.createElement("tr");

        Object.values(data).forEach((text: any) => {
            const cell = document.createElement("td");
            const textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    parent.appendChild(table);

    const b = performance.now();
    return b - a;
}
