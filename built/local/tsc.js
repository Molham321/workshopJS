System.register("lib/functions/addClassName", [], function (exports_1, context_1) {
    "use strict";
    var addClassName;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * add one or more class name to element
             * @param element a HTMLElement
             * @param classNames an Array of all class Name
             * @example
             * const div = document.createElement('div');
             * addClassName(div, "class1", "class2");
             */
            exports_1("addClassName", addClassName = function (element) {
                var classNames = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    classNames[_i - 1] = arguments[_i];
                }
                if (element) {
                    classNames.forEach(function (classname) {
                        element.classList.add(classname);
                    });
                }
            });
        }
    };
});
System.register("lib/types/TEvent", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("lib/types/TAttribut", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("lib/types/TElement", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("lib/functions/createElement", [], function (exports_5, context_5) {
    "use strict";
    var CE;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            /**
             * to create and return a new HTMLElement with TEV06 {type, events and attributs}
             * @param elements a type of TEV06 to give elements properties
             * @returns HTMLElemnt without appending!
             * @exampel
             * const container = $(".company-list-wrapper") as HTMLElement;
             * container.CE({ type: "ul" })
             */
            exports_5("CE", CE = function () {
                var elements = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    elements[_i] = arguments[_i];
                }
                // create a new HTMLElement List
                var elementsList = [];
                elements.forEach(function (element) {
                    // create a new HTMLElement
                    var newElement = document.createElement(element.type);
                    // check if there any attributs
                    if (element.attributs) {
                        var entries = Object.entries(element.attributs); // get all entries (key: value) als array
                        entries.forEach(function (entrie) {
                            switch (entrie[0]) {
                                case "textContent":
                                    newElement.textContent = entrie[1];
                                    break;
                                case "style":
                                    newElement.style.cssText = entrie[1];
                                    break;
                                default:
                                    newElement.setAttribute(entrie[0], entrie[1]);
                                    break;
                            }
                        });
                    }
                    // check if there any events
                    if (element.events) {
                        var entries = Object.entries(element.events);
                        entries.forEach(function (entrie) {
                            newElement.addEventListener(entrie[0], entrie[1]);
                        });
                    }
                    elementsList.push(newElement);
                });
                // return the last HTMLElement
                return elementsList[elementsList.length - 1];
            });
        }
    };
});
System.register("lib/functions/createElementTemplate", [], function (exports_6, context_6) {
    "use strict";
    var CET;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            /**
             * createElementTemplate to create HTML Elements with innerHTML methode
             * @param html html script
             * @returns element
             * @example
             * const myList = __createElementFormHtml(`
             *  <ul>
             *      <li>dcode</li>
             * </ul>
             * `)
             * document.body.appendChild(myList)
             *
             */
            exports_6("CET", CET = function (html) {
                var template = document.createElement("template");
                template.innerHTML = html.trim();
                return template.content.firstElementChild;
            });
        }
    };
});
System.register("lib/functions/createTable", [], function (exports_7, context_7) {
    "use strict";
    var CT;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            /**
             * to create a new table in the document
             * @param parent "parent" is an HTML element
             * @param columns array of string
             * @param data array of Object like database
             * @param className is string, a class name
             * @param id is string, a id name
             * @returns we get a new table in a certain container with a certain class
             * @exampel
             * const data = [
             *           { name: "James",
             *               age: 21,
             *               country: "US" },
             *           { name: "Rony",
             *               age: 31,
             *               country: "DE" },
             *           { name: "Max",
             *               age: 22,
             *               country: "SP" },
             *           { name: "Mark",
             *              age: 25,
             *               country: "CA" },
             *      ];
             * const parent3 = document.body;
             * const columns = ["name", "age", "country"];
             * const className = "table";
             * const id = "table";
             * CT(parent3, columns, data, className, id);
             */
            exports_7("CT", CT = function (parent, columns, data, className, id) {
                var _a, _b;
                var table = document.createElement("table");
                if (className) {
                    table.classList.add(className);
                }
                if (id) {
                    table.id = id;
                }
                table.appendChild(document.createElement("thead"));
                (_a = table.querySelector("thead")) === null || _a === void 0 ? void 0 : _a.appendChild(document.createElement("tr"));
                for (var i = 0; i < columns.length; i++) {
                    var heading = document.createElement("td");
                    heading.textContent = columns[i];
                    (_b = table.querySelector("thead tr")) === null || _b === void 0 ? void 0 : _b.appendChild(heading);
                }
                data.forEach(function (data) {
                    var row = document.createElement("tr");
                    Object.values(data).forEach(function (text) {
                        var cell = document.createElement("td");
                        var textNode = document.createTextNode(text);
                        cell.appendChild(textNode);
                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                });
                return parent.appendChild(table);
            });
        }
    };
});
/**
 * Function.prototype.bind()
 * The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value,
 * with a given sequence of arguments preceding any provided when the new function is called
 * @example
 * const module = {
 * x: 42,
*  getX: function() {
 *  return this.x;
 *  }
 * };
 *
 * const unboundGetX = module.getX;
 * console.log(unboundGetX()); // The function gets invoked at the global scope
 * -> expected output: undefined
 *
 * const boundGetX = unboundGetX.bind(module);
 * console.log(boundGetX());
 * -> expected output: 42
 *
 * Summary:
 * bind() = Borrows a function, & creates a copy.
 * "this" keyword replaced with the object passed in as an argument
 * more on that below: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
System.register("lib/functions/getElements", [], function (exports_8, context_8) {
    "use strict";
    var $, getElement, $$, getElements;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {/**
             * Function.prototype.bind()
             * The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value,
             * with a given sequence of arguments preceding any provided when the new function is called
             * @example
             * const module = {
             * x: 42,
            *  getX: function() {
             *  return this.x;
             *  }
             * };
             *
             * const unboundGetX = module.getX;
             * console.log(unboundGetX()); // The function gets invoked at the global scope
             * -> expected output: undefined
             *
             * const boundGetX = unboundGetX.bind(module);
             * console.log(boundGetX());
             * -> expected output: 42
             *
             * Summary:
             * bind() = Borrows a function, & creates a copy.
             * "this" keyword replaced with the object passed in as an argument
             * more on that below: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
             */
            /**
             * to Return a HTMLElement like querySelector
             * @example
             * const mainContent = $('.main-content');
             */
            // Version_01
            exports_8("$", $ = document.querySelector.bind(document));
            // Version_02
            exports_8("getElement", getElement = function (selectro) {
                return document.querySelector(selectro);
            });
            /**
             * to Return a HTMLElements like querySelectorAll
             * @example
             * const externalLinks = $$('a[target="_blank"]');
             */
            // Version_01
            exports_8("$$", $$ = document.querySelectorAll.bind(document));
            // Version_02
            exports_8("getElements", getElements = function (selectro) {
                return document.querySelectorAll(selectro);
            });
        }
    };
});
System.register("lib/functions/index", ["lib/functions/addClassName", "lib/functions/createElement", "lib/functions/createElementTemplate", "lib/functions/createTable", "lib/functions/getElements"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (addClassName_1_1) {
                exports_9({
                    "addClassName": addClassName_1_1["addClassName"]
                });
            },
            function (createElement_1_1) {
                exports_9({
                    "CE": createElement_1_1["CE"]
                });
            },
            function (createElementTemplate_1_1) {
                exports_9({
                    "CET": createElementTemplate_1_1["CET"]
                });
            },
            function (createTable_1_1) {
                exports_9({
                    "CT": createTable_1_1["CT"]
                });
            },
            function (getElements_1_1) {
                exports_9({
                    "$": getElements_1_1["$"],
                    "$$": getElements_1_1["$$"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("lib/types/index", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("lib/index", ["lib/functions/index", "lib/types/index"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_11(exports);
    }
    return {
        setters: [
            function (functions_1_1) {
                exportStar_1(functions_1_1);
            },
            function (types_1_1) {
                exportStar_1(types_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("lib/tests/fooV_CE", ["lib/index"], function (exports_12, context_12) {
    "use strict";
    var __1, fooV_CE;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (__1_1) {
                __1 = __1_1;
            }
        ],
        execute: function () {
            exports_12("fooV_CE", fooV_CE = function () {
                var _a, _b, _c, _d;
                var companies = [
                    {
                        countrySymbol: "DE",
                        displayName: "Fanta",
                        id: 2,
                        ident: "C-2",
                        token: "Fanta"
                    },
                ];
                var companySelection = {
                    itemsCount: 4,
                    items: [
                        {
                            value: 1,
                            label: "Coca Cola",
                            title: "Coca Cola"
                        },
                        {
                            value: 2,
                            label: "Fanta",
                            title: "Fanta"
                        },
                        {
                            value: 3,
                            label: "Sprite",
                            title: "Sprite"
                        },
                        {
                            value: 4,
                            label: "Mezzo Mix",
                            title: "Mezzo Mix"
                        },
                    ]
                };
                var setCheckBox = function (checked) {
                    var allCheckboxes = __1.$$('input[type="checkbox"]');
                    allCheckboxes.forEach(function (item) {
                        item.checked = checked;
                        var li = item.closest("li");
                        checked
                            ? li.classList.add("active-company")
                            : li.classList.remove("active-company");
                    });
                };
                var changeClassList = function (e) {
                    var _a;
                    var target = e.target;
                    var li = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                    li.classList.contains("active-company")
                        ? li.classList.remove("active-company")
                        : li.classList.add("active-company");
                };
                var mouseoverFuction = function () {
                    // eslint-disable-next-line no-console
                    console.log("test mouseover");
                };
                var container = __1.$(".company-list-wrapper");
                (_b = (_a = container
                    .appendChild(__1.CE({ type: "ul" }))
                    .appendChild(__1.CE({ type: "li" }))
                    .appendChild(__1.CE({
                    type: "span",
                    events: {
                        click: function () {
                            setCheckBox(true);
                        },
                        mousemove: mouseoverFuction
                    },
                    attributs: {
                        "class": "checkbutton",
                        textContent: "Select All",
                        style: "background-color: #eee"
                    }
                }))
                    .appendChild(__1.CE({ type: "span" }))
                    .parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(__1.CE({
                    type: "span",
                    events: {
                        click: function () {
                            setCheckBox(false);
                        }
                    },
                    attributs: { "class": "checkbutton",
                        textContent: "//Deselect all" }
                }));
                var ul = __1.$("ul");
                var _loop_1 = function (i) {
                    var item = companySelection.items[i];
                    (_c = ul.appendChild(__1.CE({ type: "li" }))
                        .appendChild(__1.CE({
                        type: "label",
                        attributs: { "class": "listItem" }
                    }))
                        .appendChild(__1.CE({
                        type: "input",
                        events: { click: changeClassList },
                        attributs: { type: "checkbox" }
                    }))
                        .parentElement) === null || _c === void 0 ? void 0 : _c.appendChild(__1.CE({
                        type: "span",
                        attributs: { "class": "span",
                            textContent: item.title }
                    }));
                    var checkboxs = __1.$$("input");
                    var lastCheckbox = checkboxs[checkboxs.length - 1];
                    var li = (_d = lastCheckbox.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement;
                    if (companies.find(function (c) { return c.id === item.value; })) {
                        lastCheckbox.setAttribute("checked", "checked");
                        li.classList.add("active-company");
                    }
                };
                for (var i = 0; i < companySelection.items.length; i++) {
                    _loop_1(i);
                }
            });
        }
    };
});
/* eslint-disable no-console */
System.register("index", ["lib/tests/fooV_CE"], function (exports_13, context_13) {
    "use strict";
    var fooV_CE_1;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (fooV_CE_1_1) {
                fooV_CE_1 = fooV_CE_1_1;
            }
        ],
        execute: function () {/* eslint-disable no-console */
            fooV_CE_1.fooV_CE();
            //__________________________________________________________
            // import { fooV_CEP } from "./lib/tests/fooV_CEP";
            // fooV_CEP();
            //__________________________________________________________
            // import { fooV_CET } from "./lib/tests/fooV_CET";
            // fooV_CET();
            //__________________________________________________________
            // import { test_$, test_querySelector } from "./lib/tests/performance/getElement";
            // import { faster, avaTime, tester } from "./lib/tests/performance/index";
            // import { test_addClassName, test_classList_add } from "./lib/tests/performance/addClassName";
            // import { test_CE, test_CEJS } from "./lib/tests/performance/createElement";
            // import { test_CEP, test_CEPJS } from "./lib/tests/performance/createElementPrototype";
            // import { test_CET, test_CETJS } from "./lib/tests/performance/createElementTemplate";
            // import { test_CT, test_CTJS } from "./lib/tests/performance/createTable";
            // faster("$", avaTime(tester(test_$)), "querySelector", avaTime(tester(test_querySelector)));
            // console.log("----------------------------------");
            // faster("addClassName", avaTime(tester(test_addClassName)), "element.classList.add plain javascript", avaTime(tester(test_classList_add)));
            // console.log("----------------------------------");
            // faster("CE", avaTime(tester(test_CE)), "CE plain javascript", avaTime(tester(test_CEJS)));
            // console.log("----------------------------------");
            // faster("CEP", avaTime(tester(test_CEP)), "CEP plain javascript", avaTime(tester(test_CEPJS)));
            // console.log("----------------------------------");
            // faster("CEP", avaTime(tester(test_CET)), "CEP plain javascript", avaTime(tester(test_CETJS)));
            // console.log("----------------------------------");
            // faster("CT", avaTime(tester(test_CT)), "CT plain javascript", avaTime(tester(test_CTJS)));
            // console.log("----------------------------------");
            // faster("CE", avaTime(tester(test_CE)), "CEP", avaTime(tester(test_CEP)));
        }
    };
});
System.register("lib/functions/calculator", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    function addition(a, b) {
        return a + b;
    }
    exports_14("addition", addition);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("lib/functions/createElementPrototype", [], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            /**
             * CE = create Element is a HTMLElement prototype to create new HTMLElement in the document
             * @param elements is a optional rest paramenter to give elements properties like type, attributs or events
             */
            HTMLElement.prototype.CEP = function () {
                var _this = this;
                var elements = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    elements[_i] = arguments[_i];
                }
                elements.forEach(function (element) {
                    var newElement = document.createElement(element.type);
                    // check if there any attributs
                    if (element.attributs) {
                        var entries = Object.entries(element.attributs); // get all entries (key: value) als array
                        entries.forEach(function (entrie) {
                            switch (entrie[0]) { // entrie[1] = value
                                case "textContent":
                                    newElement.textContent = entrie[1];
                                    break;
                                case "style":
                                    newElement.style.cssText = entrie[1];
                                    break;
                                default:
                                    newElement.setAttribute(entrie[0], entrie[1]);
                                    break;
                            }
                        });
                    }
                    // check if there any events
                    if (element.events) {
                        var entries = Object.entries(element.events); // get all entries (key: value) als array
                        entries.forEach(function (entrie) {
                            if (typeof entrie[1] === "function") { // check if the user give a function
                                newElement.addEventListener(entrie[0], entrie[1]); // entrie[0] = key
                            }
                            else { // entrie[1] = value
                                throw new Error("Error: the events property must get/call a function as a parameter");
                            }
                        });
                    }
                    _this.appendChild(newElement);
                });
                return this.lastChild;
            };
        }
    };
});
System.register("lib/tests/foo jquery", ["jquery"], function (exports_16, context_16) {
    "use strict";
    var jquery_1, fooCash;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }
        ],
        execute: function () {
            exports_16("fooCash", fooCash = function () {
                var companies = [
                    {
                        countrySymbol: "DE",
                        displayName: "Fanta",
                        id: 2,
                        ident: "C-2",
                        token: "Fanta"
                    },
                ];
                var companySelection = {
                    itemsCount: 4,
                    items: [
                        {
                            value: 1,
                            label: "Coca Cola",
                            title: "Coca Cola"
                        },
                        {
                            value: 2,
                            label: "Fanta",
                            title: "Fanta"
                        },
                        {
                            value: 3,
                            label: "Sprite",
                            title: "Sprite"
                        },
                        {
                            value: 4,
                            label: "Mezzo Mix",
                            title: "Mezzo Mix"
                        },
                    ]
                };
                var container = jquery_1["default"](".company-list-wrapper").append(jquery_1["default"]("<ul>").append(jquery_1["default"]("<li>").append(jquery_1["default"]("<label>").append(jquery_1["default"]("<span>", {
                    text: "Select all",
                    "class": "checkbutton",
                    click: function () {
                        setCheckBox(true);
                    }
                }), jquery_1["default"]("<span></span>", {
                    text: "Deselect all",
                    "class": "checkbutton",
                    click: function () {
                        setCheckBox(false);
                    }
                })))));
                companySelection.items.forEach(function (item) {
                    var _a, _b;
                    container.find("ul:first").append(jquery_1["default"]("<li>", {
                        "data-filtervalue": "".concat(item.label.toLowerCase(), " ").concat((_b = (_a = item.title) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : ""),
                        "data-value": item.value.toString(),
                        "class": companies.find(function (c) { return c.id === item.value; })
                            ? "active-company"
                            : ""
                    }).append(jquery_1["default"]("<label>").append(jquery_1["default"]("<input>", {
                        type: "checkbox",
                        click: function () {
                            jquery_1["default"](this).closest("li").toggleClass("active-company");
                        },
                        checked: companies.find(function (c) { return c.id === item.value; }) ? true : false
                    }), jquery_1["default"]("<span>", {
                        text: item.label
                    }))));
                });
                var setCheckBox = function (checked) {
                    var allCheckboxes = container.find("ul input[type='checkbox']");
                    allCheckboxes.each(function (_, item) {
                        item.checked = checked;
                        var li = item.closest("li");
                        checked
                            ? li.classList.add("active-company")
                            : li.classList.remove("active-company");
                    });
                };
            });
        }
    };
});
/**
 * test cAElementV04 CE: to create, append und return the last child HTMLElements (CE is new HTML Prototype)
 */
System.register("lib/tests/fooV_CEP", ["lib/index", "lib/functions/createElementPrototype"], function (exports_17, context_17) {
    "use strict";
    var __2, fooV_CEP;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (__2_1) {
                __2 = __2_1;
            },
            function (_1) {
            }
        ],
        execute: function () {/**
             * test cAElementV04 CE: to create, append und return the last child HTMLElements (CE is new HTML Prototype)
             */
            exports_17("fooV_CEP", fooV_CEP = function () {
                var _a;
                var companies = [
                    {
                        countrySymbol: "DE",
                        displayName: "Fanta",
                        id: 2,
                        ident: "C-2",
                        token: "Fanta"
                    },
                ];
                var companySelection = {
                    itemsCount: 4,
                    items: [
                        {
                            value: 1,
                            label: "Coca Cola",
                            title: "Coca Cola"
                        },
                        {
                            value: 2,
                            label: "Fanta",
                            title: "Fanta"
                        },
                        {
                            value: 3,
                            label: "Sprite",
                            title: "Sprite"
                        },
                        {
                            value: 4,
                            label: "Mezzo Mix",
                            title: "Mezzo Mix"
                        },
                    ]
                };
                var setCheckBox = function (checked) {
                    var allCheckboxes = __2.$$('input[type="checkbox"]');
                    allCheckboxes.forEach(function (item) {
                        item.checked = checked;
                        var li = item.closest("li");
                        checked
                            ? li.classList.add("active-company")
                            : li.classList.remove("active-company");
                    });
                };
                var changeClassList = function (e) {
                    var _a;
                    var target = e.target;
                    var li = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                    li.classList.contains("active-company")
                        ? li.classList.remove("active-company")
                        : li.classList.add("active-company");
                };
                var mouseoverFuction = function () {
                    // eslint-disable-next-line no-console
                    console.log("test mouseover");
                };
                var container = __2.$(".company-list-wrapper");
                container
                    .CEP({ type: "ul" })
                    .CEP({ type: "li" })
                    .CEP({
                    type: "span",
                    events: {
                        click: function () {
                            setCheckBox(true);
                        }
                    },
                    attributs: { "class": "checkbutton",
                        textContent: "Select All" }
                }, {
                    type: "span",
                    events: {
                        click: function () {
                            setCheckBox(false);
                        },
                        mouseover: mouseoverFuction
                    },
                    attributs: { "class": "checkbutton",
                        textContent: "//Deselect all" }
                });
                var ul = __2.$("ul");
                var _loop_2 = function (i) {
                    var item = companySelection.items[i];
                    // create and append elemnts to the ul
                    ul.CEP({ type: "li" })
                        .CEP({
                        type: "label",
                        attributs: { "class": "listItem" }
                    })
                        .CEP({
                        type: "input",
                        events: { click: changeClassList },
                        attributs: { type: "checkbox" }
                    }, {
                        type: "span",
                        attributs: { "class": "span",
                            textContent: item.title }
                    });
                    var checkboxs = __2.$$("input");
                    var lastCheckbox = checkboxs[checkboxs.length - 1];
                    var li = (_a = lastCheckbox.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                    if (companies.find(function (c) { return c.id === item.value; })) {
                        lastCheckbox.setAttribute("checked", "checked");
                        li.classList.add("active-company");
                    }
                };
                for (var i = 0; i < companySelection.items.length; i++) {
                    _loop_2(i);
                }
            });
        }
    };
});
/**
 * test cEFormHtml: to create html template in javascript
 * -> return template
 */
System.register("lib/tests/fooV_CET", ["lib/index"], function (exports_18, context_18) {
    "use strict";
    var __3, fooV_CET;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (__3_1) {
                __3 = __3_1;
            }
        ],
        execute: function () {/**
             * test cEFormHtml: to create html template in javascript
             * -> return template
             */
            exports_18("fooV_CET", fooV_CET = function () {
                var _a, _b, _c, _d, _e, _f;
                var companies = [
                    {
                        countrySymbol: "DE",
                        displayName: "Fanta",
                        id: 2,
                        ident: "C-2",
                        token: "Fanta"
                    },
                ];
                var companySelection = {
                    itemsCount: 4,
                    items: [
                        {
                            value: 1,
                            label: "Coca Cola",
                            title: "Coca Cola"
                        },
                        {
                            value: 2,
                            label: "Fanta",
                            title: "Fanta"
                        },
                        {
                            value: 3,
                            label: "Sprite",
                            title: "Sprite"
                        },
                        {
                            value: 4,
                            label: "Mezzo Mix",
                            title: "Mezzo Mix"
                        },
                    ]
                };
                var setCheckBox = function (checked) {
                    var allCheckboxes = __3.$$('input[type="checkbox"]');
                    allCheckboxes.forEach(function (item) {
                        item.checked = checked;
                        var li = item.closest("li");
                        checked
                            ? li.classList.add("active-company")
                            : li.classList.remove("active-company");
                    });
                };
                var template = __3.CET("\n    <ul>\n        <li>\n            <span class = \"checkbutton\" id= \"selectAllBox\">Select all/</span>\n            <span class = \"checkbutton\" id= \"deselectAllBox\">/Deselect all</span>\n        </li>\n    </ul>");
                (_a = __3.$(".company-list-wrapper")) === null || _a === void 0 ? void 0 : _a.appendChild(template);
                var _loop_3 = function (i) {
                    var item = companySelection.items[i];
                    var li = __3.CET("\n            <li data-filtervalue = \"".concat(item.label.toLowerCase(), " ").concat((_c = (_b = item.title) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : "", "\" data-value = \"").concat(item.value.toString(), "\">\n                <label>\n                    <input type = \"checkbox\" class = \"checkboxs\"></input>\n                    <span>").concat(item.label, "</span>\n                </label>\n            </li>\n        "));
                    (_d = __3.$("ul")) === null || _d === void 0 ? void 0 : _d.appendChild(li);
                    var checkboxs_1 = __3.$$(".checkboxs");
                    var lastCheckbox = checkboxs_1[checkboxs_1.length - 1];
                    if (companies.find(function (c) { return c.id === item.value; })) {
                        lastCheckbox.setAttribute("checked", "checked");
                        li.classList.add("active-company");
                    }
                };
                for (var i = 0; i < companySelection.items.length; i++) {
                    _loop_3(i);
                }
                var checkboxs = __3.$$(".checkboxs");
                checkboxs.forEach(function (checkbox) {
                    checkbox.addEventListener("click", function (e) {
                        var _a;
                        var target = e.target;
                        var li = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                        li.classList.contains("active-company")
                            ? li.classList.remove("active-company")
                            : li.classList.add("active-company");
                    });
                });
                (_e = __3.$("#selectAllBox")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () { return setCheckBox(true); });
                (_f = __3.$("#deselectAllBox")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () { return setCheckBox(false); });
            });
        }
    };
});
System.register("lib/tests/performance/addClassName", ["lib/functions/addClassName"], function (exports_19, context_19) {
    "use strict";
    var addClassName_2;
    var __moduleName = context_19 && context_19.id;
    function test_addClassName() {
        var div = document.querySelector(".company-list-wrapper");
        var a = performance.now();
        addClassName_2.addClassName(div, "class1", "class2");
        var b = performance.now();
        return b - a;
    }
    exports_19("test_addClassName", test_addClassName);
    function test_classList_add() {
        var div = document.querySelector(".company-list-wrapper");
        var a = performance.now();
        div.classList.add("class1", "class2");
        var b = performance.now();
        return b - a;
    }
    exports_19("test_classList_add", test_classList_add);
    return {
        setters: [
            function (addClassName_2_1) {
                addClassName_2 = addClassName_2_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("lib/tests/performance/createElement", ["lib/functions/createElement"], function (exports_20, context_20) {
    "use strict";
    var createElement_2;
    var __moduleName = context_20 && context_20.id;
    function test_CE() {
        function doSomething() {
            return 1 + 2;
        }
        var a = performance.now();
        createElement_2.CE({
            type: "div",
            attributs: {
                id: "id",
                "class": "class"
            },
            events: {
                click: doSomething
            }
        });
        var b = performance.now();
        return b - a;
    }
    exports_20("test_CE", test_CE);
    function test_CEJS() {
        function doSomething() {
            return 1 + 2;
        }
        var a = performance.now();
        var div = document.createElement("div");
        div.id = "id";
        div.classList.add("class");
        div.addEventListener("click", doSomething);
        var b = performance.now();
        return b - a;
    }
    exports_20("test_CEJS", test_CEJS);
    return {
        setters: [
            function (createElement_2_1) {
                createElement_2 = createElement_2_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("lib/tests/performance/createElementPrototype", ["lib/functions/createElementPrototype"], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    function test_CEP() {
        function doSomething() {
            return 1 + 2;
        }
        var container = document.querySelector(".company-list-wrapper");
        var a = performance.now();
        container.CEP({
            type: "div",
            attributs: {
                id: "id",
                "class": "class"
            },
            events: {
                click: doSomething
            }
        });
        var b = performance.now();
        return b - a;
    }
    exports_21("test_CEP", test_CEP);
    function test_CEPJS() {
        function doSomething() {
            return 1 + 2;
        }
        var container = document.querySelector(".company-list-wrapper");
        var a = performance.now();
        var div = document.createElement("div");
        div.id = "id";
        div.classList.add("class");
        div.addEventListener("click", doSomething);
        container.appendChild(div);
        var b = performance.now();
        return b - a;
    }
    exports_21("test_CEPJS", test_CEPJS);
    return {
        setters: [
            function (_2) {
            }
        ],
        execute: function () {
        }
    };
});
System.register("lib/tests/performance/createElementTemplate", ["lib/functions/createElementTemplate"], function (exports_22, context_22) {
    "use strict";
    var createElementTemplate_2;
    var __moduleName = context_22 && context_22.id;
    function test_CET() {
        var a = performance.now();
        createElementTemplate_2.CET("\n        <div id = \"id\" class = \"class\">\n            <li>dcode</li>\n        </div>\n    ");
        var b = performance.now();
        return b - a;
    }
    exports_22("test_CET", test_CET);
    function test_CETJS() {
        var a = performance.now();
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        ul.appendChild(li);
        var b = performance.now();
        return b - a;
    }
    exports_22("test_CETJS", test_CETJS);
    return {
        setters: [
            function (createElementTemplate_2_1) {
                createElementTemplate_2 = createElementTemplate_2_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("lib/tests/performance/createTable", ["lib/functions/createTable"], function (exports_23, context_23) {
    "use strict";
    var createTable_2;
    var __moduleName = context_23 && context_23.id;
    function test_CT() {
        var data = [
            { name: "James",
                age: 21,
                country: "US" },
            { name: "Rony",
                age: 31,
                country: "DE" },
            { name: "Max",
                age: 22,
                country: "SP" },
            { name: "Mark",
                age: 25,
                country: "CA" },
        ];
        var parent = document.body;
        var columns = ["name", "age", "country"];
        var className = "table";
        var id = "table";
        var a = performance.now();
        createTable_2.CT(parent, columns, data, className, id);
        var b = performance.now();
        return b - a;
    }
    exports_23("test_CT", test_CT);
    function test_CTJS() {
        var _a, _b;
        var data = [
            { name: "James",
                age: 21,
                country: "US" },
            { name: "Rony",
                age: 31,
                country: "DE" },
            { name: "Max",
                age: 22,
                country: "SP" },
            { name: "Mark",
                age: 25,
                country: "CA" },
        ];
        var parent = document.body;
        var columns = ["name", "age", "country"];
        var a = performance.now();
        var table = document.createElement("table");
        table.classList.add("table");
        table.id = "table";
        table.appendChild(document.createElement("thead"));
        (_a = table.querySelector("thead")) === null || _a === void 0 ? void 0 : _a.appendChild(document.createElement("tr"));
        for (var i = 0; i < columns.length; i++) {
            var heading = document.createElement("td");
            heading.textContent = columns[i];
            (_b = table.querySelector("thead tr")) === null || _b === void 0 ? void 0 : _b.appendChild(heading);
        }
        data.forEach(function (data) {
            var row = document.createElement("tr");
            Object.values(data).forEach(function (text) {
                var cell = document.createElement("td");
                var textNode = document.createTextNode(text);
                cell.appendChild(textNode);
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
        parent.appendChild(table);
        var b = performance.now();
        return b - a;
    }
    exports_23("test_CTJS", test_CTJS);
    return {
        setters: [
            function (createTable_2_1) {
                createTable_2 = createTable_2_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("lib/tests/performance/getElement", ["lib/functions/getElements"], function (exports_24, context_24) {
    "use strict";
    var getElements_2;
    var __moduleName = context_24 && context_24.id;
    function test_$() {
        var a = performance.now();
        getElements_2.$(".company-list-wrapper");
        // eslint-disable-next-line no-console
        var b = performance.now();
        return b - a;
    }
    exports_24("test_$", test_$);
    function test_querySelector() {
        var a = performance.now();
        document.querySelector(".company-list-wrapper");
        var b = performance.now();
        return b - a;
    }
    exports_24("test_querySelector", test_querySelector);
    return {
        setters: [
            function (getElements_2_1) {
                getElements_2 = getElements_2_1;
            }
        ],
        execute: function () {
        }
    };
});
/* eslint-disable no-console */
System.register("lib/tests/performance/index", [], function (exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    function avaTime(arr) {
        var sum = arr.reduce(function (total, current) { return total + current; }, 0);
        return sum / arr.length;
    }
    exports_25("avaTime", avaTime);
    function faster(MethodeNameA, a, MethodeNameB, b) {
        console.log("".concat(MethodeNameA, ": ").concat(a));
        console.log("".concat(MethodeNameB, ": ").concat(b));
        (a > b) ? console.log(MethodeNameB + " is faster " + b) : console.log(MethodeNameA + " is faster " + a);
    }
    exports_25("faster", faster);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function tester(func) {
        var timeArr = [];
        for (var i = 0; i < 1000; i++) {
            timeArr.push(func());
        }
        return timeArr;
    }
    exports_25("tester", tester);
    return {
        setters: [],
        execute: function () {/* eslint-disable no-console */
        }
    };
});
//# sourceMappingURL=tsc.js.map