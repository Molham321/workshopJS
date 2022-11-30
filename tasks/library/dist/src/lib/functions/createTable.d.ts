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
export declare const CT: (parent: HTMLElement, columns: string[], data: object[], className?: string, id?: string) => HTMLElement;
