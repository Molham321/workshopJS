import { Train } from './train.js';
import { Database } from './database.js';
import { Trainstation } from './trainstation.js';
import { Information } from './information.js';

// create a station with name and number of glasses TeilAufgabe 2 
const jena = new Trainstation('Jena', 5);
const information = new Information();
let trains = [];

/**
 * on click event to the 'start btn'
 */
document.querySelector('#start').addEventListener('click', () => {
    trains.forEach(train => {   // first delete all trains to start once again clear
        train.delete();
    });
    jena.setDelay();  //update value in the database
    trains = Database.map(data => {   // create a train and pass the information from database
        const train = new Train(data.trainName, data.trainLength, data.trainColor, data.trainSpeed, data.trainTrack, data.trainDelay);
        return train;
    });
    trains.forEach((train) => {
        train.drive();
    });
    information.setInfo();  // print all trins info to the table 
    console.log(Database);
});

/**
 * on click event to the 'event btn'
 */
//  document.querySelector("#event").addEventListener("click", function () {
// TODO: 
// });