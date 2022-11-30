# "Find Element(s) Wrapper"

#### Anforderungen:

- Typescript
- Tests für Klassen und Methoden

#### Akzeptanzkritierium:

Erstelle eine Bibliothek die es dem Nutzer ermöglicht schnell und einfach HTMLElemente oder Listen von HTMLElementen aus dem document oder anderen HTMLElementen zu erhalten.

Elemente sind "chainbar"

Es sollten Tests für die einzelnen Funktionen geschrieben werden.

#### Beispiel

```html
<body>
  <div class="cls">
    <div class="subcls"></div>
  </div>
  <div class="cls"></div>
</body>
```

- Elemente sollen "chainbar"

```js
const cls = document.querySelector(".cls");
cls.querySelector(".subcls");
document.querySelectorAll(".cls").forEach((item) => {
  item.querySelectorAll(".subcls");
});
```

# Utility Methoden

#### Akzeptanzkriterium

Erweitere deine Bibliothek das man auch Klassen und andere Attribute an einzelnen oder mehreren Elementen setzen kann.

Die Methoden sollen Testbar sein.

# Elemente erstellen

#### Akzeptanzkriterium

Erweitere deine Bibliothek um das erstellen von Elementen.

Die Funktion(en) sollen chainbar bzw. verschachtelbar sein um nicht für jeden Element eine eigene Variable erstellen zu müssen.

Attribute sollten via Object an die Funktion übergeben werden.

#### Beispiel

```js
let element = document.createElement("div");
element.setAttribute("id", "someId");
element.classList.add("class", "anotherClass");

let child = document.createElement("div");
child.classList.add("subcls");

let subchild = document.createElement("div");
child.appendChild(subchild);

let childsibling = document.createElement("div");

element.appendChild(child);
element.appendChild(childsibling);
document.body.appendChild(element);
```

```html
<body>
  <div id="someId" class="class anotherClass">
    <div class="subcls">
      <div></div>
    </div>
    <div></div>
  </div>
</body>
```
