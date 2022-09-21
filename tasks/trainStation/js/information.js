/**
 * information is a board containing information about
 * departure, train name and platform
 */
export class Information {
  constructor(trains) {
    this.m_trains = trains;
  }

  /**
   * setInfo() it creates new 'tr' and 'td' to fill in the table
   * with information from the Database (trains[])
   */
  setInfo() {
    const informationTable = document.querySelector(".informationTable");
    this.delete();
    for (let i in this.m_trains) {
      let data = new Date();
      data.setSeconds(data.getSeconds() + this.m_trains[i].m_delay);
      data = data.toLocaleTimeString("de-DE");

      if (this.m_trains[i].m_delay > 0) {
        this.m_trains[i].setDepartureTime(data);

        let tr = document.createElement("tr");
        let tdDate = document.createElement("td");
        let tdName = document.createElement("td");
        let tdTrack = document.createElement("td");
        let tdDelay = document.createElement("td");

        tdDate.innerHTML = data;
        tdName.innerHTML = this.m_trains[i].m_name;
        tdTrack.innerHTML = this.m_trains[i].m_track;
        tdDelay.innerHTML = this.m_trains[i].m_delay;

        tr.appendChild(tdDate);
        tr.appendChild(tdName);
        tr.appendChild(tdTrack);
        tr.appendChild(tdDelay);

        informationTable.appendChild(tr);
      }
    }
  }

  /**
   * to delete all entries in the table except the first row
   */
  delete() {
    const informationTable = document.querySelector(".informationTable");
    while (informationTable.rows.length > 1) {
      informationTable.deleteRow(1);
    }
  }
}
