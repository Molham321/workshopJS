import { CC } from "./cElementV03";

export const foo2 = () => {
  // const companies = [
  //   {
  //     countrySymbol: "DE",
  //     displayName: "Fanta",
  //     id: 2,
  //     ident: "C-2",
  //     token: "Fanta",
  //   },
  // ];

  // const companySelection = {
  //   itemsCount: 4,
  //   items: [
  //     {
  //       value: 1,
  //       label: "Coca Cola",
  //       title: "Coca Cola",
  //     },
  //     {
  //       value: 2,
  //       label: "Fanta",
  //       title: "Fanta",
  //     },
  //     {
  //       value: 3,
  //       label: "Sprite",
  //       title: "Sprite",
  //     },
  //     {
  //       value: 4,
  //       label: "Mezzo Mix",
  //       title: "Mezzo Mix",
  //     },
  //   ],
  // };

  new CC("div")
    .ccAppendChild({ eleT: "ul" })
    .ccAppendChild({ eleT: "li" })
    .ccAppendChild({ eleT: "label" })
    .ccAppendChild(
      {
        eleT: "span",
        textContent: "Select all",
        attributs: [{ n: "class", v: "checkbutton" }],
      },
      {
        eleT: "span",
        textContent: "Deselect all",
        attributs: [{ n: "class", v: "checkbutton" }],
      }
    )
    .ccAppend();

  // document.body.querySelectorAll("span").forEach((span) => {
  //   span.addEventListener("click", () => {
  //     setCheckBox(true);
  //   });
  // });

  // companySelection.items.forEach((item) => {
  //   new CC("ul")
  //     .ccAppend({
  //       eleT: "li",
  //       attributs: [
  //         {
  //           n: "data-filtervalue",
  //           v: `${item.label.toLowerCase()}  ${
  //             item.title?.toLowerCase() ?? ""
  //           }`,
  //         },
  //         {
  //           n: "data-value",
  //           v: item.value.toString(),
  //         },
  //       ],
  //     })
  //     .ccAppend({ eleT: "label" })
  //     .ccAppend({ eleT: "input", attributs: [{ n: "type", v: "checkbox" }] });
  // });

  // let setCheckBox = (checked: boolean): void => {
  //   const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  //   allCheckboxes.forEach((item) => {
  //     (item as HTMLInputElement).checked = checked;
  //     const li = item.closest("li") as HTMLElement;
  //     checked
  //       ? li.classList.add("active-company")
  //       : li.classList.remove("active-company");
  //   });
  // };
};
