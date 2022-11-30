import { getElement } from "./getElement";
import { cElementV02 } from "./cElementV02";

export const fooV02 = () => {
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

  const cmpyList = cElementV02("ul", container);
  const firstLi = cElementV02("li", cmpyList);
  const firstLabel = cElementV02("label", firstLi);
  const selectAllBox = cElementV02("span", firstLabel, "Select all", [
    "class",
    "checkbutton",
  ]);

  selectAllBox.addEventListener("click", () => setCheckBox(true));

  const deselectAllBox = cElementV02("span", firstLabel, "//Deselect all", [
    "class",
    "checkbutton",
  ]);
  deselectAllBox.addEventListener("click", () => setCheckBox(false));

  for (let i = 0; i < companySelection.items.length; i++) {
    const item = companySelection.items[i];

    const li = cElementV02(
      "li",
      cmpyList,
      undefined,
      [
        "data-filtervalue",
        `${item.label.toLowerCase()}  ${item.title?.toLowerCase() ?? ""}`,
      ],
      ["data-value", item.value.toString()]
    );

    const label = cElementV02("label", li);
    const checkbox = cElementV02("input", label, undefined, [
      "type",
      "checkbox",
    ]);

    checkbox.addEventListener("click", () =>
      li.classList.contains("active-company")
        ? li.classList.remove("active-company")
        : li.classList.add("active-company")
    );

    if (companies.find((c) => c.id === item.value)) {
      checkbox.setAttribute("checked", "checked");
      li.classList.add("active-company");
    }

    cElementV02("span", label, item.label);
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
