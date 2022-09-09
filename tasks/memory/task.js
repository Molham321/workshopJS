
const counterDiv = document.getElementById('counterDiv')
const counterElemnt = document.getElementById('counter')
const gameBoardElement = document.getElementById('gameBoard')
const startBtnElement = document.getElementById('start-btn')

let shuffledPictures, currentPictureIndex
let cardOne, cardTow
let disableDeck = false
let matchedCard = 0

let counterValue
counterValue = parseInt(counterElemnt.innerText)

window.addEventListener('load', loadGame)
startBtnElement.addEventListener('click', startGame)

function startGame() {
    startBtnElement.classList.add('hide')
    counterDiv.classList.remove('hide')
    gameBoardElement.classList.remove('hide')
}

function loadGame () {

    shuffledPictures = pictures.sort(() => Math.random() - .5)
    currentPictureIndex = 0

    for (let i=0; i < shuffledPictures.length; i++) {
        const PhotoContiner = document.createElement('div')
        PhotoContiner.classList.add('photo', 'backView')
        PhotoContiner.style.backgroundImage = "url(" + shuffledPictures[i].url + ")"
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

        counterValue++
        counterElemnt.innerText = counterValue

        let cardOneImg = cardOne.style.backgroundImage
        let cardTowImg = cardTow.style.backgroundImage

        matchCard(cardOneImg, cardTowImg)
    }
}

function matchCard(img1, img2) {
    if(img1 === img2) {
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
    } else {
        console.log(matchedCard)
    }
}

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
]