import { Database } from "./database.js";

/**
 * Trainstation class wiht member variable of Train Station name and number of tracks
 * name and number of glasses are automatically displayed in the DOM
 */
export class Trainstation {
  constructor(name, tracks) {
    this.m_name = name;
    this.m_tracks = tracks;

    this.setName();
    this.setTracks();
  }

  setName() {
    document.querySelector(".terminusStation").innerHTML = this.m_name;
  }

  setTracks() {
    for (let i = 1; i <= this.m_tracks; i++) {
      const track = document.createElement("div");
      track.classList.add("track");
      track.id = "track_" + i;
      document.querySelector(".tracks").appendChild(track);
    }
  }

  /**
   * here we go all trians in database sorted one after the other
   * we save the values length, speed and delays of the tran for example in track 1
   * if we find another train that is on the same track, we give it a new waiting time
   */
  setDelay() {
    Database.sort((a, b) => {
      return a.trainDelay - b.trainDelay;
    });

    // we save the new delay values and pass it on to the database
    let trainsDelaysNewValue = []; // new delay values: 1, 1, 1, 40, 4, 21, 5, 16, 65, 31,

    // we need these values to calculate the delay
    let trainsSpeedsArray = []; // from database
    let trainsLengthsArray = []; // from database
    let pathLength = 1700;

    Database.forEach((train) => {
      if (trainsDelaysNewValue[train.trainTrack]) {
        // Verspätungszeit = Weglänge / Geschwindkeit
        let delay =
          (pathLength + trainsLengthsArray[train.trainTrack]) /
          trainsSpeedsArray[train.trainTrack];
        train.trainDelay = trainsDelaysNewValue[train.trainTrack] + delay;
        trainsDelaysNewValue[train.trainTrack] =
          trainsDelaysNewValue[train.trainTrack] + delay;
      } else {
        trainsLengthsArray[train.trainTrack] = train.trainLength;
        trainsSpeedsArray[train.trainTrack] = train.trainSpeed;
        trainsDelaysNewValue[train.trainTrack] = train.trainDelay;
      }
    });
  }
}
