import { cTable } from "./../../src/lib/functions/cTable";
import { expect } from "chai";
import "../index.ts";

describe("test cTable function", () => {
  it("to create a new table in the document", () => {
    const data = 
    [
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

    expect(document.getElementsByTagName("table")).to.be.exist;
  });
});
