
const photosElement = document.querySelectorAll('.photo');
const counterElemnt = document.getElementById('counter');

let shuffledPictures, currentPictureIndex



window.addEventListener('load', startGame);

let counterValue;
counterValue = parseInt(counterElemnt.innerText);

photosElement.forEach(photo => {
    photo.addEventListener('click', function(e) {

        counterValue++
        counterElemnt.innerText = counterValue

    });
})

function startGame () {

    shuffledPictures = pictures.sort(() => Math.random() - .5)
    currentPictureIndex = 0

    setPic(shuffledPictures[currentPictureIndex])
}

function setPic(pic) {
    pic.url.forEach(url => {
        const div = document.createElement('div')
        div.classList.add('photo')
        div.style.backgroundImage = url
    })
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
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    },
    {
        name: 'Apfel',
        url: './photos/Apfel.jpg'
    }
]