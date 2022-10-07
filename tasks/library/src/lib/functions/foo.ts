import      { getElement }  from "./getElement";
import      { cElement }    from "./cElement";
import type { TElement }    from "./TElement";

export const foo = () => {
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

  const container = getElement(".company-list-wrapper");

  const cmpyList    = cElement({ elementType: "ul"   , parent: container });
  const firstLi     = cElement({ elementType: "li"   , parent: cmpyList });
  const firstLabel  = cElement({ elementType: "label", parent: firstLi });

  const E_selectAllBox: TElement = {
    elementType: "span",
    textContent: "Select all",
    parent: firstLabel,
    attributs: [{ qualifiedName: "class", value: "checkbutton" }],
  };

  const selectAllBox = cElement(E_selectAllBox);
  selectAllBox.addEventListener("click", () => {
    setCheckBox(true);
  });

  const E_deselectAllBox: TElement = {
    elementType: "span",
    textContent: "Deselect all",
    parent: firstLabel,
    attributs: [{ qualifiedName: "class", value: "checkbutton" }],
  };

  const deselectAllBox = cElement(E_deselectAllBox);
  deselectAllBox.addEventListener("click", () => {
    setCheckBox(false);
  });

  function setCheckBox(checked: boolean) {
    const allCheckboxes = cmpyList.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < allCheckboxes.length; i++) {
      const item = allCheckboxes[i];
      (item as HTMLInputElement).checked = checked;
      const li = item.closest("li") as HTMLElement;
      checked ? li.classList.add("active-company") : li.classList.remove("active-company");
    }
  }

  for (let i = 0; i < companySelection.items.length; i++) {
    const item = companySelection.items[i];
    const E_li: TElement = {
      elementType: "li",
      parent: cmpyList,
      attributs: [
        {
          qualifiedName: "data-filtervalue",
          value: `${item.label.toLowerCase()}  ${
            item.title?.toLowerCase() ?? ""
          }`,
        },
        {
          qualifiedName: "data-value",
          value: item.value.toString(),
        },
      ],
    };
    const li = cElement(E_li);
    const label = cElement({ elementType: "label", parent: li });

    const E_checkbox: TElement = {
      elementType: "input",
      parent: label,
      attributs: [{ qualifiedName: "type", value: "checkbox" }],
    };
    const checkbox = cElement(E_checkbox);

    checkbox.addEventListener("click", function () {
      if (li.classList.contains("active-company")) {
        li.classList.remove("active-company");
      } else {
        li.classList.add("active-company");
      }
    });

    if (companies.find((c) => c.id === item.value)) {
      checkbox.setAttribute("checked", "checked");
      li.classList.add("active-company");
    }

    const span = cElement({
      elementType: "span",
      textContent: item.label,
      parent: label,
    });
  }
};
