let limitationMaxInput1 = document.getElementById("limitation_1");
let limitationMaxInput2 = document.getElementById("limitation_2");
let limitationMinInput1 = document.getElementById("limitation_3");
let limitationMinInput2 = document.getElementById("limitation_4");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let errorWarning = document.getElementById("error-warnings");
let buttons = document.querySelectorAll(".buttons");
let toEmpty = document.getElementById("toEmpty");
let hide = document.getElementById("hide");
let errors = [];
let error;

// Mehrere Warnungen können gleichzeitig angezeigt werden
function listErrors(arg) {
  let errorMessage = "";
  for (let i = 0; i < arg.length; i++) {
    errorMessage += `<li>${arg[i]}</li>`;
  }
  return errorMessage;
}

// Hinweisbox ist am Anfang nicht sichtbar
function showError(errors) {
  errorWarning.innerHTML = `
      <ol>${listErrors(errors)}</ol>
    `;
  errorWarning.style.display = "block";

  buttons.forEach((button) => {
    button.style.display = "block";
  });
}

// Die Hinweisbox kann geleert und ausgeblendet werden
toEmpty.addEventListener("click", Empty);
hide.addEventListener("click", Hide);

// Wird in eine der beiden Felder ein Buchstabe oder Sonderzeichen eingetragen, erscheint eine Warnung in der Hinweisbox
let inputsValue = document.querySelectorAll(".inputsValue");

inputsValue.forEach((inputValue) => {
  inputValue.addEventListener("keyup", () => {
    error = false;

    let v1, v2, v3, v4;
    let errorMessage = "";

    v1 = !limitationMaxInput1.value ? 9999999999 : limitationMaxInput1.value;
    v2 = !limitationMaxInput2.value ? 9999999999 : limitationMaxInput2.value;
    v3 = !limitationMinInput1.value ? 0 : limitationMinInput1.value;
    v4 = !limitationMinInput2.value ? 0 : limitationMinInput2.value;

    if (isNaN(inputValue.value)) {
      error = true;
      errorMessage = `Input must be a Number`;
      !errors.includes(errorMessage) ? errors.push(errorMessage) : "";
    } else {
      errors = errors.filter((ele) => {
        ele !== errorMessage;
      });
    }

    if (input1.value > parseInt(v1)) {
      error = true;
      errorMessage = `Error: Max input 1 is ${v1}!`;
      !errors.includes(errorMessage) ? errors.push(errorMessage) : "";
    }

    if (input2.value > parseInt(v2)) {
      error = true;
      errorMessage = `Error: Max input 2 is ${v2}!`;
      !errors.includes(errorMessage) ? errors.push(errorMessage) : "";
    }

    if (input1.value < parseInt(v3)) {
      error = true;
      errorMessage = `Error: Min input 1 is ${v3}!`;
      !errors.includes(errorMessage) ? errors.push(errorMessage) : "";
    }

    if (input2.value < parseInt(v4)) {
      error = true;
      errorMessage = `Error: Min input 2 is ${v4}!`;
      !errors.includes(errorMessage) ? errors.push(errorMessage) : "";
    }

    if (!error) {
      errorWarning.innerHTML = "";
      errorWarning.style.display = "none";

      buttons.forEach((button) => {
        button.style.display = "none";
      });
    } else {
      showError(errors);
    }
  });
});

function Empty() {
  errors = [];
  errorWarning.innerText = "";
}

function Hide() {
  errorWarning.style.display = "none";
  buttons.forEach((button) => {
    button.style.display = "none";
  });
}
