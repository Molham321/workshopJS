// 2. Ändere die Hintergrund- und Randfarbe vom Container #MoveContainer
let MoveContainerElement  = document.getElementById("MoveContainer")
MoveContainerElement.style.backgroundColor='#66Cdaa'
MoveContainerElement.style.borderColor ='#FFFF00'

// 3. Hänge einen click-Eventlistener an den Button #ToggleMoveContainerBtn, der den Container #MoveContainer ein- bzw. ausblendet
let count = 0;
document.getElementById('toggle-move-container-button').addEventListener('click', function() {

    if(count % 2 === 0) {
        document.getElementById('MoveContainer').style.display = 'none';
        document.getElementById('toggle-move-container-button').value = 'Anzeigen';
    } else {
        document.getElementById('MoveContainer').style.display = 'block';
        document.getElementById('toggle-move-container-button').value = 'Verstecken';
    }

    count ++;
})

// 4. Erstelle einen zweiten Button #ToggleContainerBtn, der per Klick den Container #MoveContainer nach rechts bzw. links verschiebt.
const moveContainerWrapper = document.getElementById('move-container-wrapper');

let distance = 0;
let goRight = true;

document.getElementById('MoveContainerBtn').addEventListener('click', function() {

    let MoveContainerSteps = document.getElementById('MoveContainerSteps').value;

    // todo -------------------
    if(MoveContainerSteps == 0 || isNaN(MoveContainerSteps) ) {
        document.getElementById('MoveContainerSteps').value = '100';
        alert('input value can not be 0. value = 100px now');
        MoveContainerSteps = 100;
    }

    console.log(distance)
    console.log(moveContainerWrapper.clientWidth)

    if(distance < (moveContainerWrapper.clientWidth - 100) && goRight === true) {
        distance += MoveContainerSteps*1;
        document.getElementById('MoveContainer').style.left = distance + 'px';
    } else {
        goRight = false;
        distance -= MoveContainerSteps*1
        document.getElementById('MoveContainer').style.left = distance  + 'px';
    }

    if(distance <= 0){
        goRight = true;
    }
    
})