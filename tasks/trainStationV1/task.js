const trainsData = [
    { trainName: "Köln", length: 175, color: "yellow", speed: 90, delay: 1 },
    { trainName: "Münster", length: 200, color: "blue", speed: 200, delay: 3 },
    { trainName: "Berlin", length: 125, color: "pink", speed: 130, delay: 5 },
    { trainName: "Erfurt", length: 140, color: "purple", speed: 30, delay: 4 },
    { trainName: "Cottbus", length: 190, color: "yellow", speed: 45, delay: 3 }
]

class Trainstation {
    constructor(locationName, tracks) {
        this.locationName = locationName;
        this.tracks = tracks;
        this.#setName();
        this.#setTracks();
    }

    #setName() {
        document.querySelector("#trainstationName").innerHTML = this.locationName;
    }

    #setTracks() {
        for (var i = 0; i < this.tracks; i++) {
            const track = document.createElement("div");
            track.classList.add("track");
            track.id = "track_"+trainsData[i].trainName;
            document.querySelector("#tracks").appendChild(track);
        }
    }
}

class Train {
    constructor(trainName, length, color, speed) {
        this.trainName = trainName;
        this.length = length;
        this.color = color;
        this.speed = speed;
        this.#buildTrainDiv();
        this.#createEventlistener();
    }

    #buildTrainDiv() {
        const train = document.createElement("div");
        train.classList.add("train");
        train.id = "train_"+this.trainName;
        train.style.backgroundColor = this.color;
        train.style.width = this.length + "px";
        train.style.marginLeft = -this.length+ 10 + "px";
        document.querySelector("#track_" + this.trainName).appendChild(train);
        train.innerHTML = this.trainName;
        const speed = document.createElement("div");
        speed.id = "speed";
        document.querySelector("#train_" + this.trainName).appendChild(speed);
        speed.innerHTML = this.speed;
    }

    drive(delay){
        let durationInSeconds = 2000 / this.speed;  // CSS keyframes length is left: 2000px;
        document.querySelector("#train_" + this.trainName).style.animationDelay = delay + "s";
        document.querySelector("#train_" + this.trainName).style.animationDuration = durationInSeconds+"s";
    }

    toggleStop() {
        let trainDiv = document.querySelector("#train_" + this.trainName);
        if (trainDiv.style.animationPlayState !== 'paused') {
            trainDiv.style.animationPlayState = 'paused';
        }
        else {
            trainDiv.style.animationPlayState = 'running';
        }
    }

    delete(){
        document.querySelectorAll(".track").forEach(function (track) { track.innerHTML = ""; });
    }

    #createEventlistener() {
        const that = this;
        document.querySelector("#train_" + this.trainName).addEventListener("click", function () {
            that.toggleStop();
        });
    }
}
        
const trainstation = new Trainstation("Jena", 5);
let trains = [];
document.querySelector("#start").addEventListener("click", function () {
    trains.forEach(function (train) {
        train.delete(train);
    })
    trains = trainsData.map(function (trainData) {
        console.log(trainData);
        const train = new Train(trainData.trainName, trainData.length, trainData.color, trainData.speed);
        train.drive(trainData.delay);
        return train;
    });
});