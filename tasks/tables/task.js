
const submit = document.getElementById('submit');
const itemInput = document.getElementById('itemInput');
const checkbox = document.querySelector("input[name=sort]");
const inverted = document.getElementById('inverted');

inverted.addEventListener('click', () => {

  itemInput.value = itemInput.value.split("").reverse().join("");
})

submit.addEventListener("click", () => {

  empty()

  // Befüllen der Tabelle
  let count = countdown()
  let table = document.getElementById('myTable');

  for(let key in count) {
      let row = `
      <tr>
          <td>${key}</td>
          <td>${count[key]}</td>
      </tr>`

      table.innerHTML += row;
  }
});

// ------------------------------------------------------------

checkbox.addEventListener("change", (e) => {

  if(e.target.checked) {

    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {

      switching = false;
      rows = table.rows;

      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];

        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }

      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
});

function countdown() {
  
    let count = {};
    // let itemArr = itemInput.value.split(",");
    let itemArr = itemInput.value.split(",").map(element => element.trim());

    itemArr.forEach(element => {
        if(count[element]) {
            count[element]++;
        } else {
            count[element] = 1;
        }
    });

    return count;
}

function empty () {
    // Leeren der Ausgabetabelle

    let count = countdown()

    let table = document.getElementById('myTable');

    for(let key in count) {

        table.innerHTML = 
        `
            <tr>
              <th>Item</th>
              <th>Anzahl</th>
            </tr>`;
    }
}