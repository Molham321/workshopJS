
let errorWarning = document.getElementById("error-warnings");
let buttons = document.querySelectorAll(".buttons");
let toEmpty = document.getElementById('toEmpty');
let hide = document.getElementById('hide');
let select = document.getElementById('select');
let errors = [];
let error;

// Mehrere Warnungen können gleichzeitig angezeigt werden
function listErrors(arg) {
  let errorMessage = '';
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

    buttons.forEach(button => {
      button.style.display = 'block';
    })
}

// Die Hinweisbox kann geleert und ausgeblendet werden
toEmpty.addEventListener('click', Empty);
hide.addEventListener('click', Hide);

// Wird in eine der beiden Felder ein Buchstabe oder Sonderzeichen eingetragen, erscheint eine Warnung in der Hinweisbox
const inputsValue = document.querySelectorAll('.inputsValue');

inputsValue.forEach(inputValue => {
  inputValue.addEventListener('keyup', () => {

    error = false;


    if(isNaN(inputValue.value)) 
    {
      error = true;
      if (!errors.includes('Input must be a Number')) {
        errors.push('Input must be a Number');
      }
    }

    // ====================================================

    let i = select.selectedIndex;
    let value = select.options[i].text;

    if (value === 'Min(Input1)') {
      MinInput1();
    }

    if (value === 'Max(Input1)') {
      MaxInput1();
    }

    if (value === 'Min(Input2)') {
      MinInput2();
    }

    if (value === 'Max(Input2)') {
      MaxInput2 ();
    }

    if (value === 'Input1 less Input2')  {
      Input1LessInput2();
    }


    if(!error) {
        errorWarning.innerHTML = '';
        errorWarning.style.display = "none";
  
        buttons.forEach(button => {
        button.style.display = 'none';
      })
    } else {
      showError(errors);
    }

    console.log(error);
  })
});


function Empty() {
  errors = [];
  errorWarning.innerText = "";
}

function Hide() {
    errorWarning.style.display = "none";
    buttons.forEach(button => {
    button.style.display = 'none';
  })
}

function MinInput1() {
  if (inputsValue[0].value < 99) {
    if (!errors.includes('input1 must be greater than two')) {
      errors.push('input1 must be greater than two');
      showError(errors);
    }
    error = true;
  }
}

function MaxInput1() {
  if (inputsValue[0].value > 99999999) {
    if (!errors.includes('input must be less than 8')) {
      errors.push('input must be less than 8');
      showError(errors);
    }
    error = true;
  }
}

function MinInput2() {
  if (inputsValue[1].value < 99) {
    if (!errors.includes('input2 must be greater than two')) {
      errors.push('input2 must be greater than two');
      showError(errors);
    }
    error = true;
  }
}

function MaxInput2 () {
  if (inputsValue[1].value > 99999999) {
    if (!errors.includes('input2 must be less than 8')) {
      errors.push('input2 must be less than 8');
      showError(errors);
    }
    error = true;
  }

}

  function Input1LessInput2() {

      if (inputsValue[0].value > inputsValue[1].value ) 
      {
        if (!errors.includes('input1 must be less than input2')) 
        {
          errors.push('input1 must be less than input2');
          showError(errors);
        }
        error = true;
      }
  }
