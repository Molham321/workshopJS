import { cEFormHtml } from "./cEFormHtml";
export const fooV03 = () => {
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

  let setCheckBox = (checked: boolean): void => {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach((item) => {
      (item as HTMLInputElement).checked = checked;
      const li = item.closest("li") as HTMLElement;
      checked ? li.classList.add("active-company") : li.classList.remove("active-company");
    });
  };

  const template: HTMLTemplateElement = cEFormHtml(`
    <ul>
      <li>
        <span class = "checkbutton" id= "selectAllBox">Select all/</span>
        <span class = "checkbutton" id= "deselectAllBox">/Deselect all</span>
      </li>
    </ul>`);

  document.querySelector(".company-list-wrapper")?.appendChild(template);

  for (let i = 0; i < companySelection.items.length; i++) {
    const item = companySelection.items[i];
    const li = cEFormHtml(`
      <li data-filtervalue = "${item.label.toLowerCase()} ${
      item.title?.toLowerCase() ?? ""
    }" data-value = "${item.value.toString()}">
        <label>
          <input type = "checkbox" class = "checkboxs"></input>
          <span>${item.label}</span>
        </label>
      </li>
    `);

    document.querySelector("ul")?.appendChild(li);

    const checkboxs = document.querySelectorAll('.checkboxs'); 
    const lastCheckbox = checkboxs[checkboxs.length-1];
    if (companies.find((c) => c.id === item.value)) {
      lastCheckbox.setAttribute("checked", "checked");
      li.classList.add("active-company");
    }
  }
    const checkboxs = document.querySelectorAll('.checkboxs');
    checkboxs.forEach(checkbox => {
      checkbox.addEventListener("click", (e: Event) => {
        const target = e.target as HTMLElement;
        const li = target.parentElement?.parentElement as HTMLElement;
        li.classList.contains("active-company") ? li.classList.remove("active-company") : li.classList.add("active-company");
      });
    })

  document.getElementById("selectAllBox")?.addEventListener("click", () => setCheckBox(true));
  document.getElementById("deselectAllBox")?.addEventListener("click", () => setCheckBox(false));
};
