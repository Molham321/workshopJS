
import { cEFormHtml } from "./../../src/lib/functions/cEFormHtml";
import { expect } from "chai";
import "../index.ts";

const div = document.getElementById("cls") as HTMLDivElement;

describe("test cEFormHtml function", () => {
  it("to create HTML Element", () => {
    const myList: HTMLTemplateElement = cEFormHtml(`
        <ul>
            <li class = "listItem">dcode 1 from cEFormHtml</li>
        </ul>
        `);

    div.appendChild(myList);

    expect(myList.parentElement!.id).to.be.equal(div.id);
  });
});
