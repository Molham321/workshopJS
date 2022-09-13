const trainsData = [
    { trainName: "Köln", length: 175, color: "yellow", speed: 90, track: 1, delay: 1 },
    { trainName: "Münster", length: 200, color: "blue", speed: 200, track: 1, delay: 5 },
    { trainName: "Berlin", length: 125, color: "pink", speed: 130, track: 2, delay: 2 },
    { trainName: "Erfurt", length: 140, color: "purple", speed: 30, track: 3, delay: 4 },
    { trainName: "Cottbus", length: 90, color: "yellow", speed: 45, track: 2, delay: 1 },
    { trainName: "Rostock", length: 290, color: "lightblue", speed: 130, track: 4, delay: 1 },
    { trainName: "Görlitz", length: 90, color: "black", speed: 130, track: 5, delay: 5 },
    { trainName: "Freiberg", length: 145, color: "grey", speed: 90, track: 4, delay: 10 },
    { trainName: "Frankfurt", length: 80, color: "green", speed: 45, track: 3, delay: 10 },
    { trainName: "Kassel", length: 120, color: "brown", speed: 25, track: 1, delay: 15 }
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
        for (var i = 1; i <= this.tracks; i++) {
            const track = document.createElement("div");
            track.classList.add("track");
            track.id = "track_"+i;
            document.querySelector("#tracks").appendChild(track);
        }
    }

    setDelay() {
        trains.sort(function (a, b) {
            return a.delay - b.delay;
        });
        let lastDelay = [];
        let lastSpeed = [];
        let lastLength = [];
        trains.forEach(function (train) {
            if (lastDelay[train.track]) {
                // Verspätungszeit in Sekunden = Weglänge in px (fester Wert) / Geschwindkeit (px je Sekunde) vom Zug
                let delay = (1690 + lastLength[train.track]) / lastSpeed[train.track];
                train.delay = lastDelay[train.track] + delay; // neues Delay setzen
                lastSpeed[train.track] = train.speed; // letztes Duplikat dessen Speed merken
                lastDelay[train.track] = lastDelay[train.track] + delay; // letztes Duplikat dessen Delay merken
                lastLength[train.track] = train.length;
            } else {
                lastSpeed[train.track] = train.speed;
                lastDelay[train.track] = train.delay;
                lastLength[train.track] = train.length;
            }
        });
    }
}

class Train {
    constructor(trainName, length, color, speed, track, delay) {
        this.trainName = trainName;
        this.length = length;
        this.color = color;
        this.speed = speed;
        this.track = track;
        this.delay = delay;
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
        document.querySelector("#track_" + this.track).appendChild(train);
        train.innerHTML = this.trainName;
        const speed = document.createElement("div");
        speed.id = "speed";
        document.querySelector("#train_" + this.trainName).appendChild(speed);
        speed.innerHTML = this.speed;
    }

    drive(){
        let durationInSeconds = (2000) / this.speed;  // CSS keyframes length is left: 2000px;
        document.querySelector("#train_" + this.trainName).style.animationDelay = this.delay + "s";
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

class DeparturePlan{
    constructor() {
    }

    setTrains() {
        const tbl = document.querySelector("#departureTable");
        while (tbl.rows.length > 1) {
            tbl.deleteRow(1);
        }
        for (let i in trains) {
            let date = new Date();
            date.setSeconds(date.getSeconds() + trains[i].delay);
            date = date.toLocaleTimeString('de-DE');
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.innerHTML = date;
            let td2 = document.createElement("td");
            td2.innerHTML = trains[i].trainName;
            let td3 = document.createElement("td");
            td3.innerHTML = trains[i].track;
            let td4 = document.createElement("td");
            td4.innerHTML = trains[i].delay;
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbl.appendChild(tr);
        }
    }
}
        

const trainstation = new Trainstation("Jena", 5);
const departurePlan = new DeparturePlan();
let trains = [];
document.querySelector("#start").addEventListener("click", function () {
    trains.forEach(function (train) {
        train.delete(train);
    });
    trains = trainsData.map(function (trainData) {
        const train = new Train(trainData.trainName, trainData.length, trainData.color, trainData.speed, trainData.track, trainData.delay);
        return train;
    });
    trainstation.setDelay();
    trains.forEach(function (train) {
        train.drive();
    });
    departurePlan.setTrains();
});