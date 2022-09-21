(function () {
  let employees;
  let fields = 4;
  init();

  function init() {
    setGamefield();
    getCards();
    document.querySelector("#start").addEventListener("click", function () {
      fields = fieldnumberSlider.value;
      resetField();
      setGamefield();
      setDeck(checkBoxes());
      setCardHandler();
    });
  }

  function getCards() {
    document.querySelector("#start").hidden = true;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/workshop/WS_Bootcamp.asmx/GetCards", true);
    xhr.responseType = "json";
    xhr.setRequestHeader("content-type", "application/json");
    xhr.addEventListener("load", function () {
      if (xhr.status === 200 && xhr.status < 300) {
        employees = xhr.response.d;
        employees = employees.filter((employees) => employees.Picture !== "");
        document.querySelector("#start").hidden = false;
        handleCheckboxes();
      }
    });
    xhr.send();
  }

  function setGamefield() {
    const game = document.querySelector(".game");
    const numberOfFields = fields * fields;
    game.style.width = fields * 100 + "px";
    game.style.height = fields * 100 + "px";
    for (let i = 0; i < numberOfFields; i++) {
      const field = document.createElement("div");
      field.classList.add("field");
      field.id = "field_" + i;
      document.querySelector(".game").appendChild(field);
    }
  }

  function setCardsLayout(deck) {
    const numberOfFields = fields * fields;
    const numberOfEmployes = deck.length / 2;
    for (let i = 0; i < numberOfFields; i++) {
      const field = document.querySelector("#field_" + i);
      const isPictureToNameMode =
        document.querySelector('input[name = "layout"]:checked').id === "name";
      let card = document.createElement("div");
      if (deck[i] === undefined) {
        //12
        card.classList.add("blackCard");
        field.style.pointerEvents = "none";
        field.appendChild(card);
        continue;
      } else if (i >= numberOfEmployes && isPictureToNameMode) {
        // 2
        card.classList.add("namedCard");
        card.textContent = deck[i].FirstName + " " + deck[i].LastName;
        card.name = deck[i].FirstName + " " + deck[i].LastName;
        card.hidden = true;
        field.appendChild(card);
        continue;
      }
      card = document.createElement("img");
      card.classList.add("pictureCard");
      card.setAttribute("src", deck[i].Picture);
      card.name = deck[i].FirstName + " " + deck[i].LastName;
      card.alt = deck[i].FirstName + " " + deck[i].LastName;
      card.hidden = true;
      field.appendChild(card);
    }
  }

  function setCardHandler() {
    document.querySelectorAll(".field").forEach(function (element) {
      element.addEventListener("click", function () {
        if (
          document.querySelectorAll(".flipped").length >= 2 ||
          element.classList.contains("flipped")
        ) {
          return false;
        } else {
          flip(element);
        }
      });
    });
  }

  function flip(field) {
    field.firstChild.hidden = false;
    field.classList.add("flipped");
    if (document.querySelectorAll(".flipped").length === 2) {
      document.querySelector("#counter").value++;
      if (
        document.querySelectorAll(".flipped")[0].firstChild.name !==
        document.querySelectorAll(".flipped")[1].firstChild.name
      ) {
        setTimeout(flipback, 1500);
      } else {
        document.querySelectorAll(".flipped")[0].style.pointerEvents = "none";
        document.querySelectorAll(".flipped")[1].style.pointerEvents = "none";
        document.querySelectorAll(".flipped").forEach(function (element) {
          element.classList.remove("flipped");
        });
        checkIfWon();
      }
    }
  }

  function resetField() {
    game.innerHTML = "";
    document.querySelector("#counter").value = 0;
    document.querySelector("#notification").innerHTML = "";
    document.querySelector("#notification").style.display = "none";
  }

  function checkIfWon() {
    if (
      document.querySelectorAll(".pictureCard[hidden] , .namedCard[hidden]")
        .length > 0
    ) {
      return false;
    }
    document.querySelector("#notification").style.display = "block";
    notification.innerHTML =
      "Glückwunsch! Du hast das Spiel in " + counter.value + " Zügen beendet.";
  }

  function flipback() {
    document.querySelectorAll(".flipped").forEach(function (element) {
      element.firstChild.hidden = true;
      element.classList.remove("flipped");
    });
  }

  function shuffle(employees) {
    let j;
    let x;
    let i;
    for (i = employees.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = employees[i];
      employees[i] = employees[j];
      employees[j] = x;
    }
    return employees;
  }

  function setDeck(employees) {
    let deck = [];
    const offset = (fields * fields) / 2;
    employees = shuffle(employees);
    deck = employees.slice(0, offset);
    deck = deck.concat(deck);
    setCardsLayout(deck);
    shuffleDivs(deck);
  }

  function shuffleDivs() {
    const gameDiv = document.querySelector("#game");
    const fieldDivArray = Array.prototype.slice.call(
      gameDiv.querySelectorAll(".field")
    );
    shuffle(fieldDivArray);
    fieldDivArray.forEach(function (fieldDiv) {
      gameDiv.appendChild(fieldDiv);
    });
  }

  function checkBoxes() {
    let newEmployees = [];
    document
      .querySelectorAll("#departments input[type='checkbox']:checked")
      .forEach(function (element) {
        newEmployees = newEmployees.concat(
          employees.filter((employees) => employees.Group === element.id)
        );
      });
    return newEmployees;
  }

  function handleCheckboxes() {
    document
      .querySelectorAll("#departments input[type='checkbox']")
      .forEach(function (changedChk) {
        changedChk.addEventListener("change", function () {
          const department = changedChk.id;
          // change lower checkboxes
          const departmentFieldset = document.querySelector(
            "fieldset[data-department=" + department + "]"
          );
          if (departmentFieldset) {
            departmentFieldset
              .querySelectorAll("input[type='checkbox']")
              .forEach(function (lowerChk) {
                lowerChk.checked = changedChk.checked;
              });
          }
          // change upper checkboxes
          let upperDepartmentFieldset = changedChk.closest("fieldset");
          while (upperDepartmentFieldset !== null) {
            const upperDepartment = upperDepartmentFieldset.dataset.department;
            let upperDepartmentChk = document.getElementById(upperDepartment);
            if (!upperDepartmentChk) {
              upperDepartmentFieldset = null;
              continue;
            }
            if (changedChk.checked) {
              let areAllChecked = true;
              const children = upperDepartmentFieldset.children;
              for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (!child.matches("input[type='checkbox']")) {
                  continue;
                }
                if (areAllChecked && !child.checked) {
                  areAllChecked = false;
                }
              }
              upperDepartmentChk.checked = areAllChecked;
            } else {
              upperDepartmentChk.checked = false;
            }
            upperDepartmentFieldset = upperDepartmentChk.closest("fieldset");
          }
        });
      });
  }
})();
