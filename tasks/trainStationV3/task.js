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
        this.trains = [];
        this.#addName();
        this.#addTracks();
    }

    #addName() {
        document.querySelector("#trainstationName").innerHTML = this.locationName;
    }

    addTrains(trains) {
        this.trains = trains;
    }

    #addTracks() {
        // Damit Gleis bei nr 1 beginnt
        for (let i = 1; i <= this.tracks; i++) {
            const track = document.createElement("div");
            track.classList.add("track");
            track.id = "track_"+i;
            document.querySelector("#tracks").appendChild(track);
        }
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
        this.departure = 0;
        this.intervalId;
        this.position = 0;
        this.paused = false;
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

    toggleStop() {
        this.paused = !this.paused;
    }

    clearTrack(){
        document.querySelector("#track_" + this.track).innerHTML = "";
    }

    #createEventlistener() {
        const that = this;
        document.querySelector("#train_" + this.trainName).addEventListener("click", function () {
            that.toggleStop();
        });
    }

    setDeparture(departure) {
        this.departure = departure;
    }

    drive() {
        const train = document.querySelector("#train_" + this.trainName);
        let pos = 0;
        const smoothAnim = 200;
        let date = new Date();
        this.intervalId = setInterval(()=> {
            if (new Date().getTime() >= date.getTime() + (this.delay * 1000) && !this.paused) {
                if (pos === 0) {
                    this.delay = 0;
                    departurePlan.build();
                }
                if (pos >= 1690 + this.length) {
                    clearInterval(this.intervalId);
                } else {
                    pos = pos + this.speed / smoothAnim;
                    train.style.left = pos + 'px';
                    this.position = pos;
                }
            }
        }, 1000 / smoothAnim);
    }

    async #newInterval() {
        await clearInterval(this.intervalId);
        this.drive();
    }

    slow(trains) {
        this.speed = this.speed * 0.66666666;
        this.#newDelay(trains);
    }

    shorten(trains) {
        document.querySelector("#train_" + this.trainName).style.width = this.length * 0.66666666 + "px";
        this.#newDelay(trains);
    }

    growth(trains) {
        document.querySelector("#train_" + this.trainName).style.width = this.length * 1.33333333 + "px";
        this.#newDelay(trains);
    }

    #newDelay(trains) {
        const newDelayTimeAtThisPosition = (1690 - this.position + this.length) / this.speed;
        document.querySelector("#train_" + this.trainName + " #speed").innerHTML = Number.parseFloat(this.speed).toFixed(2);
        const lastDelay = [];
        let i = 0;
        trains.forEach((train) => {
            if (train.track === this.track && train.departure >= new Date()) {
                train.delay = newDelayTimeAtThisPosition;
                lastDelay[0] = newDelayTimeAtThisPosition;
                if (i > 0) {
                    train.delay = lastDelay[i] + (1690 + this.length) / this.speed;
                }
                i++;
                train.#newInterval();
            }
        });
        departurePlan.build(trains);
    }
}

class DeparturePlan{
    constructor(trains) {
        this.trains = trains;
    }

    build() {
        const tbl = document.querySelector("#departureTable tbody");
        tbl.innerHTML = "";
        for (let i in this.trains) {
            let date = new Date();
            const train = this.trains[i];
            date.setSeconds(date.getSeconds() + train.delay);
            if (train.delay > 0) {
                train.setDeparture(date);
                date = date.toLocaleTimeString('de-DE');
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerHTML = date;
                const td2 = document.createElement("td");
                td2.innerHTML = train.trainName;
                const td3 = document.createElement("td");
                td3.innerHTML = train.track;
                const td4 = document.createElement("td");
                td4.innerHTML = train.delay;
                tr.appendChild(td);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tbl.appendChild(tr);
            }
        }
    }

    calculateDelay() {
        this.trains.sort(function (a, b) {
            return a.delay - b.delay;
        });
        let lastDelay = [];
        let lastSpeed = [];
        let lastLength = [];
        this.trains.forEach(function (train) {
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

const trainstation = new Trainstation("Jena", 5);
let departurPlan;
let trains2 = [];
document.querySelector("#start").addEventListener("click", function () {
    trains2.forEach(function (train) {
        train.clearTrack();
    });
    trains2 = trainsData.map(function (trainData) {
        const train = new Train(trainData.trainName, trainData.length, trainData.color, trainData.speed, trainData.track, trainData.delay);
        return train;
    });
    departurePlan = new DeparturePlan(trains2);
    trainstation.addTrains(trains2);
    departurePlan.calculateDelay();
    trains2.forEach(function (train) {
        train.drive();
    });
    departurePlan.build(trains2);
});

document.querySelector("#event").addEventListener("click", function () {
    const now = new Date();
    const drivingTrains = trains2.filter(function (train) {
        if (train.departure <= now && now <= (new Date(train.departure.getTime() + ((1690 + train.length) / train.speed)*1000))) {
            return train;
        }
    });
    const randomTrain = drivingTrains[Math.floor(Math.random() * drivingTrains.length)];
    const randEvent = Math.floor(Math.random() * 3);
    switch (randEvent) {
        case 0:
            randomTrain.slow(trains2);
            break;
        case 1:
            randomTrain.shorten(trains2);
            break;
        case 2:
            randomTrain.growth(trains2);
            break;
    }
});