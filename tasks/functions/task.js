const inputElement = document.querySelector("#TextInput");
const output = document.querySelector("#output");
const errorWarning = document.querySelector("#error-warnings");
const NumberInput1 = document.querySelector("#NumberInput1");
const NumberInput2 = document.querySelector("#NumberInput2");
const NumberOutput = document.querySelector("#NumberOutput");
const operations = document.querySelector("#operations");

/**
 * Aufgabe 1
 * show an error if the input does not contain a name or alert the name with a welcome message
 */
document.getElementById("greeting").addEventListener("click", greeting);

/**
 * Aufgabe 2
 * checked whether the input is a number, if no then error, if yes then it is shown and multiplied by 2
 */
document.getElementById("checkInput").addEventListener("click", checkInput);

/**
 * Aufgabe 3
 * error will cleared away
 */
document.getElementById("clearError").addEventListener("click", clearError);

/**
 * a simple calculator
 */
document.getElementById("calculator").addEventListener("click", calculator);

/**
 * shows the current error message
 * @param {*} error
 */
function showError(error) {
  let errorMessage = "Achtung, folgender Fehler ist aufgetreten: ";
  errorMessage += error;

  errorWarning.innerText = errorMessage;
  errorWarning.style.display = "block";
}

function greeting() {
  if (inputElement.value === "" || !isNaN(inputElement.value)) {
    showError("Enter your name!");
  } else {
    output.innerText = inputElement.value;
    output.style.display = "block";
    alert("Willkommen auf der Seite" + " " + inputElement.value);
  }
}

function checkInput() {
  isNaN(inputElement.value) || !inputElement.value
    ? showError("please check your input and inter a number!")
    : (inputElement.value *= 2);
}

function clearError() {
  errorWarning.innerText = "";
  errorWarning.style.display = "none";
}

function calculator() {
  const NumberInput1Value = NumberInput1.value;
  const NumberInput2Value = NumberInput2.value;
  const operationsValue = operations.value;
  let NumberOutputValue = NumberOutput.value;

  switch (operationsValue) {
    case "+":
      NumberOutputValue = NumberInput1Value * 1 + NumberInput2Value * 1;
      break;
    case "-":
      NumberOutputValue = NumberInput1Value * 1 - NumberInput2Value * 1;
      break;
    case "*":
      NumberOutputValue = NumberInput1Value * 1 * (NumberInput2Value * 1);
      break;
    case "/":
      if (NumberInput2 * 1 === 0) {
        showError("something went wrong, please try again later");
      } else {
        NumberOutputValue = (NumberInput1Value * 1) / (NumberInput2Value * 1);
      }
      break;
  }

  NumberOutput.value = NumberOutputValue;
}
