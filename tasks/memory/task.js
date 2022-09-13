
const counterElemnt    = document.getElementById('counter');
const gameBoardElement = document.getElementById('gameBoard');
const startBtnElement  = document.getElementById('start-btn');
const gameTypes        = document.getElementsByName('gameType');
const fieldSizeLabel   = document.getElementById('fieldSizeLabel');
const fieldSizeInput   = document.getElementById('fieldSizeInput');
const counterDiv       = document.getElementById('counterDiv');
const counter          = document.querySelector(".counter b");

let shuffledPictures;
let cardOne, cardTow;

let counterValue = 0;
let matchedCard = 0;
let disableDeck = false;

// gameTypes[0] == Photo-Photo // gameTypes[1] == Photo- Nmae
function typeOfGame() 
{
  for (let i = 0; i < gameTypes.length; i++) 
  {
    if (gameTypes[i].checked) 
      return gameTypes[i].value;
  }
}

//-----------------------------------------------------------------

startBtnElement.addEventListener('click', startGame);

/**
 * at StartGame we hide and show certain elements and load the selected game type
 */
function startGame() 
{
  counterDiv.classList.remove('hide');
  gameBoardElement.classList.remove('hide');

  startBtnElement.classList.add('hide');
  fieldSizeLabel.classList.add('hide');
  fieldSizeInput.classList.add('hide');
  gameTypes.forEach(gameType => {
      gameType.classList.add('hide');
  })

    typeOfGame() == 0 ? loadGamePhotoPhoto() : loadGamePhotoName();
}

/**
 * the playing field is built dynamically
 */
function loadGame() 
{
  switch (fieldSizeInput.value) 
  {
    case '4': 
      for (let i=0; i < 4; i++) 
      {
        const row = document.createElement('div');
        row.classList.add('row');
        gameBoardElement.appendChild(row);
        for(let j=0; j < 4; j++) 
        {
          const PhotoContiner = document.createElement('div');
          PhotoContiner.classList.add('photo','backView');
          gameBoardElement.appendChild(PhotoContiner);
        }
      }
    break;

    case '5':
      for (let i=0; i < 4; i++) 
      {
        const row = document.createElement('div');
        row.classList.add('row');
        gameBoardElement.appendChild(row);
        for (let j=0; j < 5; j++) {
          const PhotoContiner = document.createElement('div');
          PhotoContiner.classList.add('photo','backView');
          gameBoardElement.appendChild(PhotoContiner);
        }
      }
      break;

      case '6':
        for (let i=0; i < 6; i++) 
        {
          const row = document.createElement('div');
          row.classList.add('row');
          gameBoardElement.appendChild(row);
          for (let j=0; j < 6; j++) {
            const PhotoContiner = document.createElement('div');
            PhotoContiner.classList.add('photo','backView');
            gameBoardElement.appendChild(PhotoContiner);
          }
        }
        break;

        case '7':
          for (let i=0; i < 6; i++) 
          {
            const row = document.createElement('div');
            row.classList.add('row');
            gameBoardElement.appendChild(row);
            for (let j=0; j < 7; j++) {
              const PhotoContiner = document.createElement('div');
              PhotoContiner.classList.add('photo','backView');
              PhotoContiner.classList.add('photo','backView');
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
function loadGamePhotoPhoto () 
{
  // generate all divs
  loadGame();
  // 
  shuffledPictures = pictures.sort(() => Math.random() - .5)
  let i = 0;
  const cards = document.querySelectorAll('.photo');
  cards.forEach(card => {
    if(i >= 8) // 8 because we have 8 pictures in total
    {
      i=0      // 0 so we stay in the loop
      card.style.backgroundImage = "url(" + shuffledPictures[i].url + ")";
    }
    else 
    {
      card.style.backgroundImage = "url(" + shuffledPictures[i].url + ")";
    }
    card.innerText = shuffledPictures[i].name;;
    i++;
  })

  const photos = document.querySelectorAll('.photo')
  photos.forEach(photo => {
  photo.addEventListener('click', flipCard)
  });

}

/**
 * add pictures and Names to divs
 */
function loadGamePhotoName() 
{
  console.log('loadGamePhotoName');
  loadGame()
  shuffledPictures = pictures.sort(() => Math.random() - .5)
  let i = 0;
  let counter = 0;

  const cards = document.querySelectorAll('.photo');
  let numberOfPictures = cards.length;

  cards.forEach(card => {

    if(i >= 8) 
    {
      i=0
      card.style.backgroundImage = "url(" + shuffledPictures[i].url + ")";
    }
    else 
    {
      card.style.backgroundImage = "url(" + shuffledPictures[i].url + ")";
    }

    if((numberOfPictures / 2) > counter)
    {
      card.classList.add('name'); // show the name but not the photo in css
    }

    card.innerText = shuffledPictures[i].name;
    i++;
    counter++;
  })

  // ShuffleChildern()
  
  const photos = document.querySelectorAll('.photo');
  photos.forEach(photo => {
      photo.addEventListener('click', flipCard);
  });
}

/**
 * trying to ShuffleChildern
 */
// function ShuffleChildern() {
//   let gameBoard = document.querySelector('.gameBoard');
//   let rowsCollection = gameBoard.querySelectorAll('.photo');
//   let rows = Array.from(rowsCollection);
//   shuffleArray(rows);
//   for (const row of rows) {
//     gameBoard.appendChild(row);
//   }
// }

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }

/**
 * click a card/photo
 */
function flipCard({target: clickedCard}) {
    if(clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.remove('backView'); // show the card on click
        if(!cardOne) {
            return cardOne = clickedCard;
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
    if((img1.style.backgroundImage === img2.style.backgroundImage)) {
        cardOne.removeEventListener('click', flipCard);
        cardTow.removeEventListener('click', flipCard);
        cardOne = cardTow = "";
        matchedCard++;
        checkWinning();
        return disableDeck = false;
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
    if(matchedCard === 8) {
        return alert("du hast gewonnen mit " + counterValue + " Züge");
    } 
}

/**
 * Array of pictures
 */
const pictures = [
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Banana',
        url: './photos/Banana.jpg'
    },
    {
        name: 'Himbeere',
        url: './photos/Himbeere.jpg'
    },
    {
        name: 'Melone',
        url: './photos/Melone.jpg'
    },
    {
        name: 'Orange',
        url: './photos/Orange.jpg'
    },
    {
        name: 'Pfirsich',
        url: './photos/Pfirsich.jpg'
    },
    {
        name: 'Trauben',
        url: './photos/Trauben.jpg'
    },
    {
        name: 'Zitrone',
        url: './photos/Zitrone.jpg'
    }
];