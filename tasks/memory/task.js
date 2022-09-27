const counterElemnt = document.getElementById("counter");
const gameBoardElement = document.getElementById("gameBoard");
const startBtnElement = document.getElementById("start-btn");
const gameTypes = document.getElementsByName("gameType");
const fieldSizeLabel = document.getElementById("fieldSizeLabel");
const fieldSizeInput = document.getElementById("fieldSizeInput");
const counterDiv = document.getElementById("counterDiv");
const counter = document.querySelector(".counter b");

let cardOne, cardTow;

const game = {
  game: [],
  pause: false,
  score: 0,
  total: 0,
  counter: 0,
};

startBtnElement.addEventListener("click", startGame);

/**
 * at StartGame we hide and show certain elements and load the selected game type
 */
function startGame() {
  // hide elements
  startBtnElement.classList.add("hide");
  fieldSizeLabel.classList.add("hide");
  fieldSizeInput.classList.add("hide");
  gameTypes.forEach((gameType) => {
    gameType.classList.add("hide");
  });
  // show other elements
  counterDiv.classList.remove("hide");
  gameBoardElement.classList.remove("hide");

  // choose game mode
  typeOfGame() == 0 ? loadGamePhotoPhoto() : loadGamePhotoName();
}

// gameTypes[0] == Photo-Photo // gameTypes[1] == Photo- Nmae
function typeOfGame() {
  for (let i = 0; i < gameTypes.length; i++) {
    if (gameTypes[i].checked) return gameTypes[i].value;
  }
}

/**
 * add pictures and Names to divs
 */
function loadGamePhotoPhoto() {
  addBoxes();
  const cards = document.querySelectorAll(".photo");

  cards.forEach((card, ind) => {
    setPhotoAndName(card, ind);
    card.addEventListener("click", flipCard);
  });
}

/**
 * add pictures and Names to divs
 */
function loadGamePhotoName() {
  addBoxes();
  const cards = document.querySelectorAll(".photo");
  let notice = [];

  cards.forEach((card, ind) => {
    if (!notice.includes(game.game[ind])) {
      setPhotoAndName(card, ind);
    } else {
      setPhotoAndName(card, ind);
      card.classList.add("name");
    }
    notice.push(game.game[ind]);
    card.addEventListener("click", flipCard);
  });
}

function setPhotoAndName(card, ind) {
  card.style.backgroundImage = "url(" + game.game[ind].url + ")";
  card.innerText = game.game[ind].name;
}

function addBoxes() {
  loadGame(); // generate all divs
  pictures.sort(() => {
    return Math.random() - 0.5;
  });
  const temp = [];
  for (let i = 0; i < game.total; i++) {
    temp.push(pictures[i]);
  }
  game.game = temp.concat(temp);

  game.game.sort(() => {
    return Math.random() - 0.5;
  });
}

function maker(eleType, parent, html, cla) {
  const ele = document.createElement("div");
  ele.classList.add(cla);
  ele.innerHTML = html;
  return parent.appendChild(ele);
}

/**
 * the playing field is built dynamically
 */
function loadGame() {
  game.total = Math.floor((fieldSizeInput.value * fieldSizeInput.value) / 2);
  for (let i = 0; i < fieldSizeInput.value; i++) {
    const row = maker("div", gameBoardElement, " ", "row");
    for (let j = 0; j < fieldSizeInput.value; j++) {
      const PhotoContiner = maker("div", gameBoardElement, " ", "photo");
      PhotoContiner.classList.add("backView");
    }
  }
}

/**
 * click a card/photo
 */
function flipCard({ target: clickedCard }) {
  if (clickedCard !== cardOne && !game.pause) {
    clickedCard.classList.remove("backView"); // show the card on click
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    game.pause = true;
    cardTow = clickedCard;
    game.counter++;
    counter.innerText = game.counter;
    matchCard(cardOne, cardTow);
  }
}

/**
 * check if the cards matched
 */
function matchCard(img1, img2) {
  if (img1.style.backgroundImage === img2.style.backgroundImage) {
    cardOne.removeEventListener("click", flipCard);
    cardTow.removeEventListener("click", flipCard);
    cardOne = cardTow = "";
    game.score++;
    checkWinning();
    return (game.pause = false);
  }

  setTimeout(() => {
    cardOne.classList.add("backView");
    cardTow.classList.add("backView");
    cardOne = cardTow = "";
    game.pause = false;
  }, 500);
}

/**
 * check if the game over
 */
function checkWinning() {
  if (game.score === game.total) {
    return alert("du hast gewonnen mit " + game.counter + " Züge");
  }
}

/**
 * Array of pictures
 */
const pictures = [
  {
    id: 1,
    name: "Apfel",
    url: "./photos/Apfel.jpg",
  },
  {
    id: 2,
    name: "Banana",
    url: "./photos/Banana.jpg",
  },
  {
    id: 3,
    name: "Himbeere",
    url: "./photos/Himbeere.jpg",
  },
  {
    id: 4,
    name: "Melone",
    url: "./photos/Melone.jpg",
  },
  {
    id: 5,
    name: "Orange",
    url: "./photos/Orange.jpg",
  },
  {
    id: 6,
    name: "Pfirsich",
    url: "./photos/Pfirsich.jpg",
  },
  {
    id: 7,
    name: "Trauben",
    url: "./photos/Trauben.jpg",
  },
  {
    id: 8,
    name: "Zitrone",
    url: "./photos/Zitrone.jpg",
  },
  {
    id: 9,
    name: "Karotte",
    url: "./photos/Karotte.jpg",
  },
  {
    id: 10,
    name: "Tomate",
    url: "./photos/Tomate.jpg",
  },
  {
    id: 11,
    name: "Salat",
    url: "./photos/Salat.jpg",
  },
  {
    id: 12,
    name: "Kartoffel",
    url: "./photos/Kartoffel.jpg",
  },
  {
    id: 13,
    name: "Ingwer",
    url: "./photos/Ingwer.jpg",
  },
  {
    id: 14,
    name: "Gurke",
    url: "./photos/Gurke.jpg",
  },
  {
    id: 15,
    name: "Ananas",
    url: "./photos/Ananas.jpg",
  },
  {
    id: 16,
    name: "Aprikose",
    url: "./photos/Aprikose.jpg",
  },
  {
    id: 17,
    name: "Artischocke",
    url: "./photos/Artischocke.jpg",
  },
  {
    id: 18,
    name: "Avocado",
    url: "./photos/Avocado.jpg",
  },
  {
    id: 19,
    name: "Birnen",
    url: "./photos/Birnen.jpg",
  },
  {
    id: 20,
    name: "Blumenkohl",
    url: "./photos/Blumenkohl.jpg",
  },
  {
    id: 21,
    name: "Brokkoli",
    url: "./photos/Brokkoli.jpg",
  },
  {
    id: 22,
    name: "Chinakohl",
    url: "./photos/Chinakohl.jpg",
  },
  {
    id: 23,
    name: "Kirschen",
    url: "./photos/Kirschen.jpg",
  },
  {
    id: 24,
    name: "Knoblauch",
    url: "./photos/Knoblauch.jpg",
  },
];
