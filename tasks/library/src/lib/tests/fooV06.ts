/**
 * ____________ test cElementV05 with (function)   _________________
 */
import { cElementV05 } from "./cElementV05";

export const fooV06 = () => {
  const companies = [
    {
      countrySymbol: "DE",
      displayName: "Fanta",
      id: 2,
      ident: "C-2",
      token: "Fanta",
    },
  ];

  const companySelection = {
    itemsCount: 4,
    items: [
      {
        value: 1,
        label: "Coca Cola",
        title: "Coca Cola",
      },
      {
        value: 2,
        label: "Fanta",
        title: "Fanta",
      },
      {
        value: 3,
        label: "Sprite",
        title: "Sprite",
      },
      {
        value: 4,
        label: "Mezzo Mix",
        title: "Mezzo Mix",
      },
    ],
  };

  function setCheckBox(checked: boolean): void {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach((item) => {
      (item as HTMLInputElement).checked = checked;
      const li = item.closest("li") as HTMLElement;
      checked ? li.classList.add("active-company"): li.classList.remove("active-company");
    });
  }

  function changeClassList(e: Event): void {
    const target = e.target as HTMLElement;
    const li = target.parentElement?.parentElement as HTMLElement;
    li.classList.contains("active-company") ? li.classList.remove("active-company") : li.classList.add("active-company");
  }

  const container2 = cElementV05({type: "div", attributs: [{ n: "class", v: "company-list-wrapper" }]});

  container2
    .appendChild(cElementV05({ type: "ul" }))
    .appendChild(cElementV05({ type: "li" }))
    .appendChild(
      cElementV05({
        type: "span", events: [{e: "click", f: () => {setCheckBox(true)}}],
        attributs: [
          { n: "class", v: "checkbutton" },
          { n: "id", v: "SelectAll" },
          { n: "textContent", v: "Select All" },
        ],
      })
    )
    .appendChild(cElementV05({ type: "span" }))
    .parentElement?.parentElement?.appendChild(
      cElementV05({
        type: "span", events: [{e: "click", f: () => {setCheckBox(false)}}],
        attributs: [
          { n: "class", v: "checkbutton" },
          { n: "id", v: "DeselectAll" },
          { n: "textContent", v: "//Deselect all" },
        ],
      })
    );

  document.body.appendChild(container2);

  // search the ul
  const ul = document.querySelector("ul") as HTMLElement;
  for (let i = 0; i < companySelection.items.length; i++) {
    const item = companySelection.items[i];

    // create and append elemnts to the ul
    ul.appendChild(cElementV05({ type: "li" }))
      .appendChild(cElementV05({type: "label", attributs: [{ n: "class", v: "listItem" }]}))
      .appendChild(cElementV05({type: "input", events: [{ e: "click", f: changeClassList }], attributs: [{ n: "type", v: "checkbox" }]}))
      .parentElement?.appendChild(cElementV05({ type: "span", attributs: [ { n: "class", v: "span" },{ n: "textContent", v: item.title }]}));

      const checkboxs = document.querySelectorAll('input'); 
      const lastCheckbox = checkboxs[checkboxs.length-1];
      const li = lastCheckbox.parentElement?.parentElement as HTMLElement;
      if (companies.find((c) => c.id === item.value)) {
        lastCheckbox.setAttribute("checked", "checked");
        li.classList.add("active-company");
      }
  }
};
