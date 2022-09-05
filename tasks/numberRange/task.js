
let errorWarning = document.getElementById("error-warnings");
let buttons = document.querySelectorAll(".buttons");
let toEmpty = document.getElementById('toEmpty');
let hide = document.getElementById('hide');


function showError(error) {
    let errorMessage = "Achtung, folgender Fehler ist aufgetreten: ";
    errorMessage += error;
    errorWarning.innerText = errorMessage;
    errorWarning.style.display = "block";

    buttons.forEach(button => {
      button.style.display = 'block';
    })
}

toEmpty.addEventListener('click', Empty);
hide.addEventListener('click', Hide);


const inputsValue = document.querySelectorAll('.inputsValue');

inputsValue.forEach(inputValue => {
  inputValue.addEventListener('keyup', () => {
    if(isNaN(inputValue.value)) {
      showError('Input must be a Number')
    } else {
      errorWarning.innerText = '';
      errorWarning.style.display = "none";

      buttons.forEach(button => {
      button.style.display = 'none';
    })
    }
  })
  
});

function Empty() {
  errorWarning.innerText = "Achtung, folgender Fehler ist aufgetreten: ";
}

function Hide() {
    errorWarning.style.display = "none";
    buttons.forEach(button => {
    button.style.display = 'none';
  })
}
