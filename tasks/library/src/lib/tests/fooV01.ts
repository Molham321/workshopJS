import { cAElementV02 } from './../functions/cAElementV02';
import { getElements } from './../functions/getElements';

export const fooV01 = () => {
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

  const container = getElements(".company-list-wrapper");

  const cmpyList = cAElementV02({ elementType: "ul", parent: container });
  const firstLi = cAElementV02({ elementType: "li", parent: cmpyList });
  const firstLabel = cAElementV02({ elementType: "label", parent: firstLi });

  const selectAllBox = cAElementV02({
    elementType: "span",
    parent: firstLabel,
    textContent: "Select all",
    attributs: [{ n: "class", v: "checkbutton" }],
  });
  selectAllBox.addEventListener("click", () => setCheckBox(true));

  const deselectAllBox = cAElementV02({
    elementType: "span",
    parent: firstLabel,
    textContent: "//Deselect all",
    attributs: [{ n: "class", v: "checkbutton" }],
  });
  deselectAllBox.addEventListener("click", () => setCheckBox(false));

  for (let i = 0; i < companySelection.items.length; i++) {
    const item = companySelection.items[i];
    const li = cAElementV02({
      elementType: "li",
      parent: cmpyList,
      attributs: [
        {
          n: "data-filtervalue",
          v: `${item.label.toLowerCase()}  ${item.title?.toLowerCase() ?? ""}`,
        },
        { n: "data-value", v: item.value.toString() },
      ],
    });

    const label = cAElementV02({ elementType: "label", parent: li });
    const checkbox = cAElementV02({
      elementType: "input",
      parent: label,
      attributs: [{ n: "type", v: "checkbox" }],
    });
    checkbox.addEventListener("click", () =>
      li.classList.contains("active-company")
        ? li.classList.remove("active-company")
        : li.classList.add("active-company")
    );

    if (companies.find((c) => c.id === item.value)) {
      checkbox.setAttribute("checked", "checked");
      li.classList.add("active-company");
    }

    cAElementV02({
      elementType: "span",
      parent: label,
      textContent: item.label,
    });
  }

  let setCheckBox = (checked: boolean): void => {
    const allCheckboxes = cmpyList.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach((item) => {
      (item as HTMLInputElement).checked = checked;
      const li = item.closest("li") as HTMLElement;
      checked
        ? li.classList.add("active-company")
        : li.classList.remove("active-company");
    });
  };
};
