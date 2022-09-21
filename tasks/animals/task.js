// Aufgabe 1

let g_animalList = []; // used to stor all animal
let g_animalListLeft = []; // used to filter the left block
let g_animalListRight = []; // used to filter the right block

const g_fenceLeft = document.getElementById("fence-left");
const g_fenceRight = document.getElementById("fence-right");
const g_addAnimal = document.getElementById("add-animal");
const g_moveAnimal = document.getElementById("move-animal");

let isFund = () => {
  // check if the input allreade in the list
  for (let i = 0; i < g_animalList.length; i++) {
    if (g_addAnimal.value === g_animalList[i]) {
      return true;
    }
  }
};

// #AddAnimalBtn click-EventListener
document
  .getElementById("add-animal-button")
  .addEventListener("click", function () {
    // if the input allreade in the list do nothing
    if (isFund() || !g_addAnimal.value) {
      alert("the item is already existed or empty!");
    } else {
      // add the input and sort the list again
      g_animalList.push(g_addAnimal.value); // add to the list of all animal to check if we handelt
      g_animalListLeft.push(g_addAnimal.value); // add to the list of left block to filter and wright

      SortArray(g_animalListLeft, g_fenceLeft);
    }

    // Move Items on click
    function MoveAnimalOnClick() {
      let animals = document.querySelectorAll(".animal");
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].className === "animal selected") {
          // check if the animal on the left side
          if (animals[i].parentNode.id === "fence-left") {
            g_animalListRight.push(animals[i].innerText);
            let indexOfAnimal = g_animalListLeft.indexOf(animals[i].innerText);
            g_animalListLeft.splice(indexOfAnimal, 1);

            SortArray(g_animalListRight, g_fenceRight);
          } else {
            g_animalListLeft.push(animals[i].innerText);
            let indexOfAnimal = g_animalListRight.indexOf(animals[i].innerText);
            g_animalListRight.splice(indexOfAnimal, 1);

            SortArray(g_animalListLeft, g_fenceLeft);
          }
          animals[i].remove();
        }
      }
    }

    function SortArray(_animalListArray, _fence) {
      // sort all items alphabetically
      _animalListArray.sort();

      // empty the block
      _fence.innerHTML = "";

      // write the block again filtered
      for (let i = 0; i < _animalListArray.length; i++) {
        // create neu animal div
        const animal = document.createElement("div");
        animal.className = "animal";

        animal.addEventListener("click", OnItemClick);
        g_moveAnimal.addEventListener("click", MoveAnimalOnClick);

        // create neu animal span
        const span = document.createElement("span");
        span.className = "animalSpan";

        // Enter the values filtered
        span.innerText = _animalListArray[i];

        // display the div and span
        _fence.appendChild(animal);
        animal.appendChild(span);
      }
    }

    // ==========================
    // drag and drop
    // ==========================

    const draggables = document.querySelectorAll(".animal");
    const containers = document.querySelectorAll(".fence");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault;
        const draggable = document.querySelector(".dragging");
        if (draggable.parentNode.id === "fence-left") {
          g_animalListRight.push(draggable.innerText);
          let indexOfAnimal = g_animalListLeft.indexOf(draggable.innerText);
          g_animalListLeft.splice(indexOfAnimal, 1);

          SortArray(g_animalListRight, g_fenceRight);
        } else {
          g_animalListLeft.push(draggable.innerText);
          let indexOfAnimal = g_animalListRight.indexOf(draggable.innerText);
          g_animalListRight.splice(indexOfAnimal, 1);

          SortArray(g_animalListLeft, g_fenceLeft);
        }
        draggable.remove();
      });
    });
  });

// Select the Item on click
function OnItemClick(e) {
  if (
    e.target.parentNode.id === "fence-left" ||
    e.target.parentNode.id === "fence-right"
  ) {
    e.target.className == "animal"
      ? e.target.classList.add("selected")
      : e.target.classList.remove("selected");
  }
}
