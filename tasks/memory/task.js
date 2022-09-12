
const counterDiv = document.getElementById('counterDiv')
const counterElemnt = document.getElementById('counter')
const gameBoardElement = document.getElementById('gameBoard')
const startBtnElement = document.getElementById('start-btn')
const gameTypes = document.getElementsByName('gameType')
const fieldSize = document.getElementById('fieldSize')

let shuffledPictures
let cardOne, cardTow
let disableDeck = false
let matchedCard = 0

let counterValue
counterValue = parseInt(counterElemnt.innerText)

function typeOfGame() {
  for (let i = 0; i < gameTypes.length; i++) {
    if (gameTypes[i].checked) {
      return gameTypes[i].value;
    }
  }
}

startBtnElement.addEventListener('click', startGame)

function startGame() {

  if(typeOfGame() == 0) {
      loadGamePhotoPhoto()
  }
  else {
    loadGamePhotoName()
  }
    startBtnElement.classList.add('hide')
    counterDiv.classList.remove('hide')
    gameBoardElement.classList.remove('hide')
    gameTypes.forEach(gameType => {
      gameType.classList.add('hide')
    })
}

function loadGamePhotoPhoto () {
  shuffledPictures = pictures.sort(() => Math.random() - .5)
  switch (fieldSize.value) {
    case '4': 
      for (let i=0; i < shuffledPictures.length; i++) {
          const PhotoContiner = document.createElement('div')
          PhotoContiner.classList.add('photo', 'backView')
          PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i].url + ")"
          gameBoardElement.appendChild(PhotoContiner)
      }
    break;
    // case '5': 
    //   for (let i=0; i < 25; i++) {
    //       const PhotoContiner = document.createElement('div')
    //       PhotoContiner.classList.add('photo', 'backView')
    //       if(i >= 16) {
    //         PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i-16].url + ")"
    //       }
    //       PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i].url + ")"
    //       gameBoardElement.appendChild(PhotoContiner)
    //   }
    // break;
    //     case '6': 
    //   for (let i=0; i < 36; i++) {
    //       const PhotoContiner = document.createElement('div')
    //       PhotoContiner.classList.add('photo', 'backView')
    //       if(i >= 16) {
    //         PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i-16].url + ")"
    //       } else {
    //         PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i].url + ")"
    //       }
    //       gameBoardElement.appendChild(PhotoContiner)
    //   }
    // break;
    //     case '7': 
    //   for (let i=0; i < 49; i++) {
    //       const PhotoContiner = document.createElement('div')
    //       PhotoContiner.classList.add('photo', 'backView')
    //       if(i >= 16) {
    //         PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i-16].url + ")"
    //       }
    //       PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i].url + ")"
    //       gameBoardElement.appendChild(PhotoContiner)
    //   }
    // break;

  }

  const photos = document.querySelectorAll('.photo')
  photos.forEach(photo => {
  photo.addEventListener('click', flipCard)
  });

}

function loadGamePhotoName() {
  shuffledPictures = pictures.sort(() => Math.random() - .5)
  let check = []
  for (let i=0; i < shuffledPictures.length; i++) {
        const PhotoContiner = document.createElement('div')
        PhotoContiner.classList.add('photo', 'backView')
        if(!check.includes(shuffledPictures[i].url)) {
          PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i].url + ")"
          check.push(shuffledPictures[i].url)
        } else {
          PhotoContiner.innerText = shuffledPictures[i].name
        }
        gameBoardElement.appendChild(PhotoContiner)
    }
  const photos = document.querySelectorAll('.photo')
  photos.forEach(photo => {
      photo.addEventListener('click', flipCard)
  });
}

function flipCard({target: clickedCard}) {
    if(clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.remove('backView')
        if(!cardOne) {
            return cardOne = clickedCard
        }
        disableDeck = true
        cardTow = clickedCard

        // increase counter by 1
        counterValue++
        counterElemnt.innerText = counterValue

        // Problem biem photo bild vergleichen ...
        // console.log(cardTow.style.backgroundImage.includes(cardOne))
        // console.log(cardOne.style.backgroundImage.includes(cardTow))
        
        matchCard(cardOne, cardTow)
    }
}

function matchCard(img1, img2) {
    if((img1.style.backgroundImage === img2.style.backgroundImage)) {
        cardOne.removeEventListener('click', flipCard)
        cardTow.removeEventListener('click', flipCard)
        cardOne = cardTow = "";
        matchedCard++
        checkWinning()
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("backView")
        cardTow.classList.add("backView")
        cardOne = cardTow = "";
        disableDeck = false;
    }, 1200);
}

function checkWinning() {
    if(matchedCard === 8) {
        return alert("du hast gewonnen mit " + counterValue + " Züge")
    } 
}

const pictures = [
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Banana',
        url: './photos/Banana.jpg'
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
        name: 'Himbeere',
        url: './photos/Himbeere.jpg'
    },
    {
        name: 'Melone',
        url: './photos/Melone.jpg'
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
        name: 'Orange',
        url: './photos/Orange.jpg'
    },
    {
        name: 'Pfirsich',
        url: './photos/Pfirsich.jpg'
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
        name: 'Trauben',
        url: './photos/Trauben.jpg'
    },
    {
        name: 'Zitrone',
        url: './photos/Zitrone.jpg'
    },
    {
        name: 'Zitrone',
        url: './photos/Zitrone.jpg'
    }
]