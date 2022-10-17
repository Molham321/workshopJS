import { cTable } from "../../src/lib/functions/cTable";

import { JSDOM } from "jsdom";

let dom = new JSDOM(`
<!DOCTYPE html>
<body>
</body>
`);

const document = dom.window._document;

const data = [
  { name: "James", age: 21, country: "US" },
  { name: "Rony", age: 31, country: "DE" },
  { name: "Max", age: 22, country: "SP" },
  { name: "Mark", age: 25, country: "CA" },
];
const parent3 = document.body;
const columns = ["name", "age", "country"];
const className = "table";
const id = "table";
cTable(parent3, columns, data, className, id);

const table = document.getElementById("table");

test("to create a new table in the document", () => {
  expect(table).toBeDefined;
});
