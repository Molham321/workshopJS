const counterElemnt = document.getElementById("counter");
const gameBoardElement = document.getElementById("gameBoard");
const startBtnElement = document.getElementById("start-btn");
const gameTypes = document.getElementsByName("gameType");
const fieldSizeLabel = document.getElementById("fieldSizeLabel");
const fieldSizeInput = document.getElementById("fieldSizeInput");
const counterDiv = document.getElementById("counterDiv");
const counter = document.querySelector(".counter b");

let shuffledPictures;
let cardOne, cardTow;

let counterValue = 0;
let matchedCard = 0;
let maxMamatchedCard = 0;
let disableDeck = false;

// gameTypes[0] == Photo-Photo // gameTypes[1] == Photo- Nmae
function typeOfGame() {
  for (let i = 0; i < gameTypes.length; i++) {
    if (gameTypes[i].checked) return gameTypes[i].value;
  }
}

//-----------------------------------------------------------------

startBtnElement.addEventListener("click", startGame);

/**
 * at StartGame we hide and show certain elements and load the selected game type
 */
function startGame() {
  counterDiv.classList.remove("hide");
  gameBoardElement.classList.remove("hide");

  startBtnElement.classList.add("hide");
  fieldSizeLabel.classList.add("hide");
  fieldSizeInput.classList.add("hide");
  gameTypes.forEach((gameType) => {
    gameType.classList.add("hide");
  });

  typeOfGame() == 0 ? loadGamePhotoPhoto() : loadGamePhotoName();
}

/**
 * the playing field is built dynamically
 */
function loadGame() {
  switch (fieldSizeInput.value) {
    case "4":
      maxMamatchedCard = 8;
      for (let i = 0; i < 4; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gameBoardElement.appendChild(row);
        for (let j = 0; j < 4; j++) {
          const PhotoContiner = document.createElement("div");
          PhotoContiner.classList.add("photo", "backView");
          gameBoardElement.appendChild(PhotoContiner);
        }
      }
      break;

    case "5":
      maxMamatchedCard = 16;
      for (let i = 0; i < 4; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gameBoardElement.appendChild(row);
        for (let j = 0; j < 8; j++) {
          const PhotoContiner = document.createElement("div");
          PhotoContiner.classList.add("photo", "backView");
          gameBoardElement.appendChild(PhotoContiner);
        }
      }
      break;

    case "6":
      maxMamatchedCard = 24;
      for (let i = 0; i < 6; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gameBoardElement.appendChild(row);
        for (let j = 0; j < 8; j++) {
          const PhotoContiner = document.createElement("div");
          PhotoContiner.classList.add("photo", "backView");
          gameBoardElement.appendChild(PhotoContiner);
        }
      }
      break;

    case "7":
      maxMamatchedCard = 56;
      for (let i = 0; i < 8; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gameBoardElement.appendChild(row);
        for (let j = 0; j < 8; j++) {
          const PhotoContiner = document.createElement("div");
          PhotoContiner.classList.add("photo", "backView");
          gameBoardElement.appendChild(PhotoContiner);
        }
      }
      break;
  }
}

// ---------------------------------------------------------------------

/**
 * add pictures and Names to divs
 */
function loadGamePhotoPhoto() {
  // generate all divs
  loadGame();
  //
  shuffledPictures = pictures.sort(() => Math.random() - 0.5);
  let i = 0;
  const cards = document.querySelectorAll(".photo");
  cards.forEach((card) => {
    if (i >= 8) {
      // 8 because we have 8 pictures in total
      i = 0; // 0 so we stay in the loop
      shuffledPictures = pictures.sort(() => Math.random() - 0.5);
      card.style.backgroundImage = "url(" + shuffledPictures[i].url + ")";
    } else {
      card.style.backgroundImage = "url(" + shuffledPictures[i].url + ")";
    }
    card.innerText = shuffledPictures[i].name;
    i++;
  });

  const photos = document.querySelectorAll(".photo");
  photos.forEach((photo) => {
    photo.addEventListener("click", flipCard);
  });
}

/**
 * add pictures and Names to divs
 */
function loadGamePhotoName() {
  loadGame();
  shuffledPictures = pictures.sort(() => Math.random() - 0.5);
  let i = 0;
  let counter = 0;

  const cards = document.querySelectorAll(".photo");
  let numberOfPictures = cards.length;

  cards.forEach((card) => {
    if (i >= 8) {
      i = 0;
      shuffledPictures = pictures.sort(() => Math.random() - 0.5);
    }
    card.style.backgroundImage = "url(" + shuffledPictures[i].url + ")";
    card.innerText = shuffledPictures[i].name;

    // if (numberOfPictures / 2 > counter) {
    //   card.classList.add("name"); // show the name but not the photo in css
    // }

    i++;
    counter++;
  });

  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    if (
      (i > 7 && i <= 15) ||
      (i > 23 && i <= 31) ||
      (i > 39 && i <= 47) ||
      (i > 55 && i <= 63)
    ) {
      cards[i].classList.add("name");
    }
  }

  // ShuffleChildern()

  const photos = document.querySelectorAll(".photo");
  photos.forEach((photo) => {
    photo.addEventListener("click", flipCard);
  });
}

/**
 * click a card/photo
 */
function flipCard({ target: clickedCard }) {
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.remove("backView"); // show the card on click
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    disableDeck = true;
    cardTow = clickedCard;
    counterValue++;
    counter.innerText = counterValue;
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
    matchedCard++;
    checkWinning();
    return (disableDeck = false);
  }

  setTimeout(() => {
    cardOne.classList.add("backView");
    cardTow.classList.add("backView");
    cardOne = cardTow = "";
    disableDeck = false;
  }, 1200);
}

/**
 * check if the game over
 */
function checkWinning() {
  if (matchedCard === maxMamatchedCard) {
    return alert("du hast gewonnen mit " + counterValue + " Züge");
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
];
