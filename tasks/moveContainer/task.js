// 2. Ändere die Hintergrund- und Randfarbe vom Container #MoveContainer
const MoveContainerElement = document.getElementById("MoveContainer");
MoveContainerElement.style.backgroundColor = "#66Cdaa";
MoveContainerElement.style.borderColor = "#FFFF00";

// 3. Hänge einen click-Eventlistener an den Button #ToggleMoveContainerBtn, der den Container #MoveContainer ein- bzw. ausblendet
let toggleMoveContainerButton = document.getElementById(
  "toggle-move-container-button"
);
document
  .getElementById("toggle-move-container-button")
  .addEventListener("click", function () {
    if (MoveContainerElement.style.display === "none") {
      MoveContainerElement.style.display = "block";
      toggleMoveContainerButton.value = "Verstecken";
    } else {
      MoveContainerElement.style.display = "none";
      toggleMoveContainerButton.value = "Anzeigen";
    }
  });

// 4. Erstelle einen zweiten Button #ToggleContainerBtn, der per Klick den Container #MoveContainer nach rechts bzw. links verschiebt.
const moveContainerWrapper = document.getElementById("move-container-wrapper");

let distance = 0;
let goRight = true;

document
  .getElementById("MoveContainerBtn")
  .addEventListener("click", function () {
    let MoveContainerSteps =
      document.getElementById("MoveContainerSteps").value;

    if (MoveContainerSteps == 0 || isNaN(MoveContainerSteps)) {
      document.getElementById("MoveContainerSteps").value = "100";
      alert("input value can not be 0. value = 100px now");
      MoveContainerSteps = 100;
    }

    if (distance < moveContainerWrapper.clientWidth - 140 && goRight === true) {
      distance += parseInt(MoveContainerSteps);
      document.getElementById("MoveContainer").style.left = distance + "px";
    } else {
      goRight = false;
      distance -= parseInt(MoveContainerSteps);
      document.getElementById("MoveContainer").style.left = distance + "px";
    }

    if (distance <= 0) {
      goRight = true;
    }
  });
