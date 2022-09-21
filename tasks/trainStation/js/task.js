import { Train } from "./train.js";
import { Database } from "./database.js";
import { Trainstation } from "./trainstation.js";
import { Information } from "./information.js";

// create a station with name and number of glasses TeilAufgabe 2
const jena = new Trainstation("Jena", 5);
let trains = [];

/**
 * on click event to the 'start btn'
 */
document.querySelector("#start").addEventListener("click", () => {
  trains.forEach((train) => {
    // first delete all trains to start once again clear
    train.delete();
  });
  jena.setDelay(); //update value in the database
  trains = Database.map((data) => {
    // create a train and pass the information from database
    const train = new Train(
      data.trainName,
      data.trainLength,
      data.trainColor,
      data.trainSpeed,
      data.trainTrack,
      data.trainDelay
    );
    return train;
  });
  const information = new Information(trains);
  trains.forEach((train) => {
    train.drive(information);
  });
  information.setInfo(); // print all trins info to the table
});

/**
 * on click event to the 'event btn'
 */
document.querySelector("#event").addEventListener("click", function () {
  let now = new Date();
  now = now.toLocaleTimeString("de-DE");
  const drivingTrains = trains.filter((train) => {
    console.log(train.m_departureTime);
    if (train.m_departureTime <= now) {
      return train;
    }
  });
  console.log(drivingTrains);
  const randomTrain =
    drivingTrains[Math.floor(Math.random() * drivingTrains.length)];
  const randEvent = Math.floor(Math.random() * 3);
  console.log(randomTrain);
  switch (randEvent) {
    case 0:
      randomTrain.slow();
      break;
    case 1:
      randomTrain.shorten();
      break;
    case 2:
      randomTrain.growth();
      break;
  }
  jena.setDelay(); //update value in the database
  const information = new Information(trains);
  information.setInfo(); // print all trins info to the table
});
