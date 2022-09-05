
document.getElementById("submit").addEventListener("click", function() {

    const itemInput = document.getElementById('itemInput').value;
    const itemArr = itemInput.split(",");

    // Befüllen der Tabelle
    let count = {};

    itemArr.forEach(element => {
        if(count[element]) {
            count[element]++;
        } else {
            count[element] = 1;
        }
    });

    console.log(count);

    let table = document.getElementById('table');

    for(let key in count) {
        let row = `
        <th>
            <td>${key}</td>
            <td>${count[key]}</td>
        </th>`

        table.innerHTML += row;
    }
});

// ---------------------------------


document.getElementById("empty").addEventListener("click", function() {

    // Auslesen der Eingabe-Textarea
    const itemInput = document.getElementById('itemInput').value;
    // ------------------------------

    // Leeren der Ausgabetabelle
    const itemArr = itemInput.split(",");

    let count = {};

    itemArr.forEach(element => {
        if(count[element]) {
            count[element]++;
        } else {
            count[element] = 1;
        }
    });

    let table = document.getElementById('table');

    for(let key in count) {
        let row = `
        <th>
            <td></td>
            <td></td>
        </th>`


        table.innerHTML = "";
    }
    // ----------------------------------------

    // Trennen des Strings bei einem Kommas in eine Liste von Strings
    const separatingTheString = itemInput.split(" ");
    console.log(separatingTheString); 
    // -----------------------------------------

});

document.getElementById("sort").addEventListener("click", function() {

    // Auslesen der Eingabe-Textarea
    const itemInput = document.getElementById('itemInput').value;
    // ------------------------------

    // Leeren der Ausgabetabelle
    const itemArr = itemInput.split(",");

    let count = {};

    itemArr.forEach(element => {
        if(count[element]) {
            count[element]++;
        } else {
            count[element] = 1;
        }
    });

    // Trennen des Strings bei einem Kommas in eine Liste von Strings
    const separatingTheString = itemInput.split(" ");
    console.log(separatingTheString); 
    // -----------------------------------------

    // sort

    let sortable = [];
    for(let key in count ) {
        sortable.push([key, count[key]]);
    }

    sortable.sort(function(a,b) {
        return a[1] - b[1];
    });

    console.log(sortable)

    let table = document.getElementById('table');

    table.innerHTML = " ";

    for(let key in sortable) {

        let row = `
        <th>
            <td>${sortable[key]}</td>
        </th>`

        table.innerHTML += row;
    }
    // ----------------------------------------

});