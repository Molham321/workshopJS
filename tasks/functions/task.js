function showError(error) {
    let errorMessage = "Achtung, folgender Fehler ist aufgetreten: ";
    errorMessage += error;
    let errorWarning = document.getElementById("error-warnings");
    errorWarning.innerText = errorMessage;
    errorWarning.style.display = "block";
}

// Aufgabe 1

document.getElementById('greeting').addEventListener('click', function() {
    const name = document.getElementById("TextInput").value;

    const myName = document.getElementById("myName");
    myName.innerText = name;
    myName.style.display = "block";

     alert("Willkommen auf der Seite" + ' ' + name);
})

// Aufgabe 2

document.getElementById('checkInput').addEventListener('click', function() {
    let name = document.getElementById("TextInput").value;
    let myName = document.getElementById("myName");

    
    if(!isNaN(name)) 
    {
        myName.innerText = name * 2;
        myName.style.display = "block";
    }
    else {
        showError("please check your input");
    }

})

// Aufgabe 3

document.getElementById('clearError').addEventListener('click', function() {
    let errorMessage = "Achtung, folgender Fehler ist aufgetreten: ";
    errorMessage = "";
    let errorWarning = document.getElementById("error-warnings");
    errorWarning.innerText = errorMessage;
    errorWarning.style.display = "none";
})

// Aufgabe 4

document.getElementById('calculator').addEventListener('click', function() {
    let NumberInput1 = document.getElementById('NumberInput1').value;
    let NumberInput2 = document.getElementById('NumberInput2').value;
    let NumberOutput = document.getElementById('NumberOutput').value;

    let operations = document.getElementById('operations').value;

    if(isNaN(NumberInput1) || isNaN(NumberInput2)) {
        showError("something went wrong, please try again later");
    }
    else if(operations === "+") {
        NumberOutput = (NumberInput1*1) + (NumberInput2*1);
    }
    else if(operations === "-"){
        NumberOutput = (NumberInput1*1) - (NumberInput2*1);
    }
    else if(operations === "*"){
        NumberOutput = (NumberInput1*1) * (NumberInput2*1);
    }
    else if(operations === "/"){
        if(NumberInput2*1 === 0) showError("something went wrong, please try again later");

        NumberOutput = (NumberInput1*1) / (NumberInput2*1);
    }
    else {
        showError("something went wrong, please try again later");
    }

    document.getElementById('NumberOutput').value = NumberOutput;
})









