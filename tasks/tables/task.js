const submit = document.querySelector("#submit");
const itemInput = document.querySelector("#itemInput");
const checkbox = document.querySelector("input[name=sort]");
const inverted = document.querySelector("#inverted");
const sortCheckbox = document.querySelector("#sortCheckbox");

let table = document.querySelector("#myTable");
let count = [];

/**
 * input value will inverted
 */
inverted.addEventListener(
  "click",
  () => (itemInput.value = itemInput.value.split("").reverse().join(""))
);

/**
 * onsubmit, the table is first emptied,
 * then the string is separated by word with "," and stored in an array,
 * then it is sorted and written into the table again
 */
submit.addEventListener("click", () => {
  if (!itemInput.value) {
    return;
  }
  empty();

  // Befüllen der Tabelle
  count = countdown();

  // written into the table again
  for (let key in count) {
    let tr = document.createElement("tr");
    let tdItem = document.createElement("td");
    let tdNumber = document.createElement("td");

    tdItem.innerHTML = key;
    tdNumber.innerHTML = count[key];

    tr.appendChild(tdItem);
    tr.appendChild(tdNumber);

    table.appendChild(tr);
  }
  sort();
});

// ------------------------------------------------------------

checkbox.addEventListener("change", sort);

/**
 * we sort the table line by line
 */
function sort() {
  if (sortCheckbox.checked) {
    let rows;
    let round;
    let number1;
    let number2;
    let switching;
    let shouldSwitch;

    switching = true;

    // we sort until all numbers are sorted
    while (switching) {
      switching = false;
      rows = table.rows;

      // go in the table line by line
      for (round = 1; round < rows.length - 1; round++) {
        shouldSwitch = false;
        number1 = rows[round].getElementsByTagName("TD")[1]; // ("TD")[1] because we don't want to sort row 0
        number2 = rows[round + 1].getElementsByTagName("TD")[1];

        // check if number 1 is greater than number 2
        if (Number(number1.innerHTML) > Number(number2.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      // swap the two lines
      if (shouldSwitch) {
        rows[round].parentNode.insertBefore(rows[round + 1], rows[round]);
        switching = true;
      }
    }
  }
}

/**
 * @returns count an array in which we separate and count the items
 */
function countdown() {
  let itemArr = itemInput.value.split(",").map((element) => {
    return element.trim();
  });

  itemArr.forEach((element) => {
    if (element == "") return;
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  });

  return count;
}

/**
 * clear and reset table
 */
function empty() {
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  count = [];
}
