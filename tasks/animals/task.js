// Aufgabe 1

let animalList = [];
let animalListSelected = [];

let fund = false;
    
const fenceLeft  = document.getElementById('fence-left');
const fenceRight = document.getElementById('fence-right');
const addAnimal  = document.getElementById('add-animal');
const moveAnimal = document.getElementById('move-animal');


// #AddAnimalBtn click-EventListener
document.getElementById('add-animal-button').addEventListener('click', function() {

    // check if the input allreade in the list
    for (let i = 0; i < animalList.length; i++) {
        if(addAnimal.value === animalList[i] ) {
            fund = true;
        }
    } 

    // if the input allreade in the list do nothing
    if(fund) {
        alert('the item is already existed!');
        fund = false;

    } else {
        // add the input and sort the list again
        animalList.push(addAnimal.value);
        animalList.sort();

        // empty the list
        fenceLeft.innerHTML = '';

        // write the list again filtered
        for(let i = 0; i < animalList.length; i++) {

            // create neu animal div
            const animal = document.createElement('div');
            animal.className = 'animal';

            animal.addEventListener('click', OnItemClick);
            moveAnimal.addEventListener('click', MoveAnimalOnClick);
        
            // create neu animal span
            const span = document.createElement('span');
            span.className = 'animalSpan';

            // Enter the values filtered
            span.innerText = animalList[i];

            // display the div and span
            fenceLeft.appendChild(animal);
            animal.appendChild(span);
        }
    }

    // ==========================
    // drag and drop
    // ==========================

    const draggables = document.querySelectorAll('.animal');
    const containers = document.querySelectorAll('.fence');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        })

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        })

    })

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault;
            const draggable = document.querySelector('.dragging');
            container.appendChild(draggable);

        })
    })
});


// Select the Item on click
function OnItemClick(e) {

    if (e.target.parentNode.id === 'fence-left' || e.target.parentNode.id === 'fence-right') {
        if (e.target.className == 'animal') {
            e.target.classList.add('selected');
        } else {
            e.target.classList.remove('selected');
        }
        animalListSelected.push(e.target.innerText);
    }
}

// Move Items on click
function MoveAnimalOnClick () {     //TODO Aufgabe 7

    // let arr = animalListSelected;
    // arr.sort();

    let animals = document.querySelectorAll('.animal');

    for (let i = 0; i < animals.length; i++) {

        if (animals[i].className === 'animal selected') {

            const animal = document.createElement('div');
            animal.className = 'animal';

            animal.addEventListener('click', OnItemClick);

            const span = document.createElement('span');
            span.className = 'animalSpan';

            span.innerText = animals[i].innerText;

            if(animals[i].parentNode.id === 'fence-left') {
                fenceRight.appendChild(animal);
            } else {
                fenceLeft.appendChild(animal);
            }
            animal.appendChild(span);
            animals[i].remove();
        }
    }
}