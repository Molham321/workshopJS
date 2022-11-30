"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CT = void 0;
/**
 * to create a new table in the document
 * @param parent "parent" is an HTML element
 * @param columns array of string
 * @param data array of Object like database
 * @param className is string, a class name
 * @param id is string, a id name
 * @returns we get a new table in a certain container with a certain class
 * @exampel
 * const data = [
 *           { name: "James",
 *               age: 21,
 *               country: "US" },
 *           { name: "Rony",
 *               age: 31,
 *               country: "DE" },
 *           { name: "Max",
 *               age: 22,
 *               country: "SP" },
 *           { name: "Mark",
 *              age: 25,
 *               country: "CA" },
 *      ];
 * const parent3 = document.body;
 * const columns = ["name", "age", "country"];
 * const className = "table";
 * const id = "table";
 * CT(parent3, columns, data, className, id);
 */
const CT = (parent, columns, data, className, id) => {
    var _a, _b;
    const table = document.createElement("table");
    if (className) {
        table.classList.add(className);
    }
    if (id) {
        table.id = id;
    }
    table.appendChild(document.createElement("thead"));
    (_a = table.querySelector("thead")) === null || _a === void 0 ? void 0 : _a.appendChild(document.createElement("tr"));
    for (let i = 0; i < columns.length; i++) {
        const heading = document.createElement("td");
        heading.textContent = columns[i];
        (_b = table.querySelector("thead tr")) === null || _b === void 0 ? void 0 : _b.appendChild(heading);
    }
    data.forEach((data) => {
        const row = document.createElement("tr");
        Object.values(data).forEach((text) => {
            const cell = document.createElement("td");
            const textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    return parent.appendChild(table);
};
exports.CT = CT;
//# sourceMappingURL=createTable.js.map