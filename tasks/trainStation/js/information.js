
import { Database } from './database.js';

/**
 * information is a board containing information about 
 * departure, train name and platform
 */
export class Information {
    constructor() {}

    /**
     * setInfo() it creates new 'tr' and 'td' to fill in the table
     * with information from the database
     */
     setInfo() {
        const informationTable = document.querySelector('.informationTable');
        this.delete();
        for (let i in Database) {
            let data = new Date();
            // const train = this.m_trains[i];
            data.setSeconds(data.getSeconds() + Database[i].trainDelay);
 
            // train.setDeparture(data);
            data = data.toLocaleTimeString('de-DE');

            let tr      = document.createElement('tr');
            let tdDate  = document.createElement('td');
            let tdName  = document.createElement('td');
            let tdTrack = document.createElement('td');
            let tdDelay = document.createElement("td");


            tdDate.innerHTML  = data;
            tdName.innerHTML  = Database[i].trainName;
            tdTrack.innerHTML = Database[i].trainTrack;
            tdDelay.innerHTML = Database[i].trainDelay;

            tr.appendChild(tdDate);
            tr.appendChild(tdName);
            tr.appendChild(tdTrack);
            tr.appendChild(tdDelay);

            informationTable.appendChild(tr);
        }
    }

    /**
     * to delete all entries in the table except the first row
     */
    delete() {
        const informationTable = document.querySelector('.informationTable');
        while (informationTable.rows.length > 1) {
            informationTable.deleteRow(1);
        }
    }
}