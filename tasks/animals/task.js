// Aufgabe 1

    let animalList = [];
    let fund = false;

    // ==================================
    // #AddAnimalBtn click-EventListener
    // ===================================

document.getElementById('add-animal-button').addEventListener('click', function() {
    
    const fenceLeft = document.getElementById('fence-left');
    let addAnimal = document.getElementById('add-animal');

    // ----------------------------------------

    /* Verhindere ein Hinzufügen, wenn es bereits ein 
    Element .Animal mit gleichem Namen gibt. */

    for (i = 0; i < animalList.length; i++) {
        if(addAnimal.value === animalList[i] ) {
            fund = true;
        }
    } 

    if(!fund) {

        animalList.push(addAnimal.value);
         animalList.sort();


        fenceLeft.innerHTML = '';
        for(let i = 0; i < animalList.length; i++) {

            const divLeft = document.createElement('div');
            divLeft.className = 'animal';
        
            // Aufgabe 3 Klasse Selected
        
            divLeft.addEventListener('click', function(e) {
        
                const target = e.target;
        
                if (target.matches('div')) {
        
                    if (e.target.className == 'animal') {
            
                        target.className = ('animal selected');
                        console.log(target.className);
                    } else {
                        target.className = ('animal');
                        console.log(target.className);
                    }
                } 
        
            // Aufgabe 5 #MoveAnimalsBtn
        
            const moveAnimal = document.querySelector('#move-animal');
            moveAnimal.addEventListener('click', function(e) {
        
                const fenceRight = document.getElementById('fence-right');
        
                let animals = document.querySelectorAll('.animal');
        
                for (let i = 0; i < animals.length; i++) {
                    if (animals[i].className === 'animal selected') {

                        const divRight = document.createElement('div');
                        divRight.className = 'animal';
                
                        const spanRight = document.createElement('span');
                        spanRight.className = 'animalSpan';

                        spanRight.innerText = animals[i].innerText;
                        
                        fenceRight.appendChild(divRight);
                        divRight.appendChild(spanRight);
        
                        animals[i].remove();
                    }
                }
            })
            });

            const span = document.createElement('span');
            span.className = 'animalSpan';

            span.innerText = animalList[i];

            fenceLeft.appendChild(divLeft);
            divLeft.appendChild(span);
        }

    } else {
        alert('the item is already existed!');
        fund = false;
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

    //-----------------------------------------------------------------------------------


});