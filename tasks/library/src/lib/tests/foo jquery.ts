import $ from "jquery";

export const fooCash = () => {
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

    const container = $(".company-list-wrapper").append(
        $("<ul>").append(
            $("<li>").append(
                $("<label>").append(
                    $("<span>", {
                        text: "Select all",
                        class: "checkbutton",
                        click: function () {
                            setCheckBox(true);
                        },
                    }),
                    $("<span></span>", {
                        text: "Deselect all",
                        class: "checkbutton",
                        click: () => {
                            setCheckBox(false);
                        },
                    })
                )
            )
        )
    );

    companySelection.items.forEach((item) => {
        container.find("ul:first").append(
            $("<li>", {
                "data-filtervalue": `${item.label.toLowerCase()} ${
                    item.title?.toLowerCase() ?? ""
                }`,
                "data-value": item.value.toString(),
                class: companies.find((c) => c.id === item.value)
                    ? "active-company"
                    : "",
            }).append(
                $("<label>").append(
                    $("<input>", {
                        type: "checkbox",
                        click: function () {
                            $(this).closest("li").toggleClass("active-company");
                        },
                        checked: companies.find((c) => c.id === item.value) ? true : false,
                    }),
                    $("<span>", {
                        text: item.label,
                    })
                )
            )
        );
    });

    const setCheckBox = (checked: boolean): void => {
        const allCheckboxes = container.find("ul input[type='checkbox']");
        allCheckboxes.each((_, item) => {
            (item as HTMLInputElement).checked = checked;
            const li = item.closest("li") as HTMLElement;
            checked
                ? li.classList.add("active-company")
                : li.classList.remove("active-company");
        });
    };
};
