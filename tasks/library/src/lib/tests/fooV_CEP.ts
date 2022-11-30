/**
 * test cAElementV04 CE: to create, append und return the last child HTMLElements (CE is new HTML Prototype)
 */

import { $, $$ } from "..";
import "../functions/createElementPrototype";


export const fooV_CEP = () => {
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

    const setCheckBox = (checked: boolean): void => {
        const allCheckboxes = $$('input[type="checkbox"]');
        allCheckboxes.forEach((item) => {
            (item as HTMLInputElement).checked = checked;
            const li = item.closest("li") as HTMLElement;
            checked
                ? li.classList.add("active-company")
                : li.classList.remove("active-company");
        });
    };

    const changeClassList = (e: Event): void => {
        const target = e.target as HTMLElement;
        const li = target.parentElement?.parentElement as HTMLElement;
        li.classList.contains("active-company")
            ? li.classList.remove("active-company")
            : li.classList.add("active-company");
    };

    const mouseoverFuction = (): void => {  // mouseoverFuction ist nur zum testen da
        // eslint-disable-next-line no-console
        console.log("test mouseover");
    };

    const container = $(".company-list-wrapper") as HTMLElement;

    container
        .CEP({ type: "ul" })
        .CEP({ type: "li" })
        .CEP(
            {
                type: "span",
                events: {
                    click: () => {
                        setCheckBox(true);
                    },
                },
                attributs: { class: "checkbutton",
                    textContent: "Select All" },
            },
            {
                type: "span",
                events: {
                    click: () => {
                        setCheckBox(false);
                    },
                    mouseover:  mouseoverFuction
                },
                attributs: { class: "checkbutton",
                    textContent: "//Deselect all" },
            }
        );

    const ul = $("ul") as HTMLElement;
    for (let i = 0; i < companySelection.items.length; i++) {
        const item = companySelection.items[i];

        // create and append elemnts to the ul
        ul.CEP({ type: "li" })
            .CEP({
                type: "label",
                attributs: { class: "listItem" } })
            .CEP(
                {
                    type: "input",
                    events: { click: changeClassList },
                    attributs: { type: "checkbox" },
                },
                {
                    type: "span",
                    attributs: { class: "span",
                        textContent: item.title },
                }
            );

        const checkboxs = $$("input");
        const lastCheckbox = checkboxs[checkboxs.length - 1];
        const li = lastCheckbox.parentElement?.parentElement as HTMLElement;
        if (companies.find((c) => c.id === item.value)) {
            lastCheckbox.setAttribute("checked", "checked");
            li.classList.add("active-company");
        }
    }
};
