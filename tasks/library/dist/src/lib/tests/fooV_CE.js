"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fooV_CE = void 0;
const __1 = require("..");
const fooV_CE = () => {
    var _a, _b, _c, _d;
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
    const setCheckBox = (checked) => {
        const allCheckboxes = (0, __1.$$)('input[type="checkbox"]');
        allCheckboxes.forEach((item) => {
            item.checked = checked;
            const li = item.closest("li");
            checked
                ? li.classList.add("active-company")
                : li.classList.remove("active-company");
        });
    };
    const changeClassList = (e) => {
        var _a;
        const target = e.target;
        const li = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        li.classList.contains("active-company")
            ? li.classList.remove("active-company")
            : li.classList.add("active-company");
    };
    const mouseoverFuction = () => {
        // eslint-disable-next-line no-console
        console.log("test mouseover");
    };
    const container = (0, __1.$)(".company-list-wrapper");
    (_b = (_a = container
        .appendChild((0, __1.CE)({ type: "ul" }))
        .appendChild((0, __1.CE)({ type: "li" }))
        .appendChild((0, __1.CE)({
        type: "span",
        events: {
            click: () => {
                setCheckBox(true);
            },
            mousemove: mouseoverFuction,
        },
        attributs: {
            class: "checkbutton",
            textContent: "Select All",
            style: "background-color: #eee"
        },
    }))
        .appendChild((0, __1.CE)({ type: "span" }))
        .parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild((0, __1.CE)({
        type: "span",
        events: {
            click: () => {
                setCheckBox(false);
            },
        },
        attributs: { class: "checkbutton",
            textContent: "//Deselect all" },
    }));
    const ul = (0, __1.$)("ul");
    for (let i = 0; i < companySelection.items.length; i++) {
        const item = companySelection.items[i];
        (_c = ul.appendChild((0, __1.CE)({ type: "li" }))
            .appendChild((0, __1.CE)({
            type: "label",
            attributs: { class: "listItem" },
        }))
            .appendChild((0, __1.CE)({
            type: "input",
            events: { click: changeClassList },
            attributs: { type: "checkbox" },
        }))
            .parentElement) === null || _c === void 0 ? void 0 : _c.appendChild((0, __1.CE)({
            type: "span",
            attributs: { class: "span",
                textContent: item.title },
        }));
        const checkboxs = (0, __1.$$)("input");
        const lastCheckbox = checkboxs[checkboxs.length - 1];
        const li = (_d = lastCheckbox.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement;
        if (companies.find((c) => c.id === item.value)) {
            lastCheckbox.setAttribute("checked", "checked");
            li.classList.add("active-company");
        }
    }
};
exports.fooV_CE = fooV_CE;
//# sourceMappingURL=fooV_CE.js.map