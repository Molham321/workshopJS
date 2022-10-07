// ! tests in eigenen Ordner "tests" auslagern und evtl. eine Testing Library nutzen

import { foo } from "./lib";

// import {
//   addListItem,
//   cEFormHtml,
//   cElement,
//   chunk,
//   compact,
//   cTable,
//   getElement,
//   getElements,
//   setAttributes,
//   addClassName,
//   TElement,
//   TAttribut,
// } from "./lib";

// =============================================================
/**
 * test __chunk
 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(chunk(arr, 2));
// =============================================================

// =============================================================
/**
 * test __compact
 */
// const arr2 = [1, 3, 0, false, 2, "", 4, undefined, 5, NaN];
// console.log(compact(arr2));
// =============================================================

// =============================================================
/**
 * test getElement
 */
// console.log(getElement('div'));
// console.log(getElement('.cls'));
// console.log(getElement('.subcls'));
// console.log(getElement('#subcls1'));
// console.log(getElement('das gibt es nicht'));
// console.log(getElement('#cls1'));
// console.log(getElement('#cls2'));
// =============================================================

// =============================================================
/**
 * test getElements
 */
// console.log(getElements('div'));
// console.log(getElements('.cls'));
// =============================================================

// =============================================================
/**
 * test cElement
 */
// const element: TElement = {
//   elementType: "div",
//   html: "test from cElement",
//   attributs: [
//     { qualifiedName: "class", value: "class" },
//     { qualifiedName: "id", value: "id" },
//   ],
// };

// document.body.appendChild(cElement(element));

// =============================================================

// =============================================================
/**
 * test cElement
 */
// const elements: TElement[] = [
//   {
//     elementType: "div",
//     html: "test from cElement div1",
//     attributs: [
//       { qualifiedName: "class", value: "class1" },
//       { qualifiedName: "id", value: "id1" },
//     ],
//   },
//   {
//     elementType: "div",
//     html: "test from cElement div2",
//     attributs: [
//       { qualifiedName: "class", value: "class2" },
//       { qualifiedName: "id", value: "id2" },
//     ],
//   },
//   {
//     elementType: "div",
//     html: "test from cElement div3",
//     attributs: [
//       { qualifiedName: "class", value: "class3" },
//       { qualifiedName: "id", value: "id3" },
//     ],
//   },
// ];

// elements.forEach((element) => {
//   document.body.appendChild(cElement(element));
// });

// =============================================================

// =============================================================
/**
 * test setClassName
 */
// const div = document.getElementById("cls1")!;
// addClassName(div, "test1", "test2", "test3");
// console.log(div);
// =============================================================

// =============================================================
/**
 * test addListItem
 */
// const parent = document.getElementById("table") as HTMLElement;
// let newItem = addListItem(parent, "HelloWorld from addListItem", [
//   { qualifiedName: "id", value: "id" },
//   { qualifiedName: "class", value: "class" },
// ]);
// parent.appendChild(newItem!);
// =============================================================

// =============================================================
/**
 * test addListItem
 */
// const items = [
//   "Item_01 from addListItem",
//   "Item_02 from addListItem",
//   "Item_03 from addListItem",
// ];
// const parent2 = document.getElementById("table") as HTMLElement;

// items.forEach((i) => {
//   let newItem = addListItem(parent2, i);
//   parent2.appendChild(newItem!);
// });

// =============================================================

// =============================================================
/**
 * test cTable()
 */
// const data = [
//   { name: "James", age: 21, country: "US" },
//   { name: "Rony", age: 31, country: "DE" },
//   { name: "Max", age: 22, country: "SP" },
//   { name: "Mark", age: 25, country: "CA" },
// ];
// const parent3 = document.body;
// const columns = ["name", "age", "country"];
// const className = "table";
// const id = "table";
// cTable(parent3, columns, data, className, id);
// =============================================================

// =============================================================
/**
 * test setAttributes
 */
// const attributs: TAttribut[] = [
//   { qualifiedName: "value", value: "value" },
//   { qualifiedName: "id", value: "id" },
//   { qualifiedName: "class", value: "class" },
//   { qualifiedName: "placeholder", value: "placeholder" },
//   { qualifiedName: "innterText", value: "innterText" },
// ];
// const div2 = document.getElementById("cls1")!;
// console.log(setAttributes(div2, attributs));
// =============================================================

// =============================================================
/**
 * test CEFormHtml
 */
// const myList = cEFormHtml(`
//   <ul>
//     <li>dcode from cEFormHtml</li>
//   </ul>
// `);
// document.body.appendChild(myList!);
// =============================================================

foo();
