/**
 * a class train is defined here.
 * when you create it, you also have to specify the name, length, color and speed.
 * the train is automatically created and displayed in the DOM. then a Stop start event on click appears
 */
export class Train {
  constructor(name, width, color, speed, track, delay) {
    this.m_name = name;
    this.m_width = width;
    this.m_color = color;
    this.m_speed = speed;
    this.m_track = track;
    this.m_delay = delay;
    this.m_position = 0;
    this.m_departureTime = 0;
    this.m_intervalId;

    this.createTrainDiv();
    this.createStopGoEventlistener();
  }

  /**
   * a container was created with class 'train'
   * and other properties and a counterner for speed
   */
  createTrainDiv() {
    const train = document.createElement("div");
    const speed = document.createElement("div");

    train.classList.add("train");
    speed.classList.add("speed");

    train.id = "train_" + this.m_name;
    speed.id = "train_" + this.m_name + "speed";

    train.style.backgroundColor = this.m_color;
    train.style.width = this.m_width + "px";

    train.innerHTML = this.m_name;
    speed.innerHTML = this.m_speed;

    document.querySelector("#track_" + this.m_track).appendChild(train);
    document.querySelector("#train_" + this.m_name).appendChild(speed);
  }

  /**
   * here we define the duration of the animations in seconds
   * the animations start from 0 to 2000.
   * we devede it with the speed so that we get a proper movement.
   */
  drive(information) {
    const train = document.querySelector("#train_" + this.m_name);
    let pos = 0;
    const smoothAnim = 200;
    let data = new Date();

    this.m_intervalId = setInterval(() => {
      if (new Date().getTime() >= data.getTime() + this.m_delay * 1000) {
        if (pos === 0) {
          this.m_delay = 0;
          information.setInfo();
        }
        if (pos >= 1700 + this.m_width) {
          clearInterval(this.intervalId);
        } else {
          pos = pos + this.m_speed / smoothAnim;
          train.style.left = pos + "px";
          this.m_position = pos;
        }
      }
    }, 1000 / smoothAnim);
  }

  /**
   * on click event on the train to stop it or move it
   */
  createStopGoEventlistener() {
    document
      .querySelector("#train_" + this.m_name)
      .addEventListener("click", () => {
        this.toggleStopGo();
      });
  }

  /**
   * simple if statement.
   * if the animations are running then stop and if they stop then let them run
   */
  toggleStopGo() {
    let trainDiv = document.querySelector("#train_" + this.m_name);
    trainDiv.style.animationPlayState !== "paused"
      ? (trainDiv.style.animationPlayState = "paused")
      : (trainDiv.style.animationPlayState = "running");
  }

  setDepartureTime(time) {
    this.m_departureTime = time;
  }

  /**
   * delete is useful to delete all Train, track etc.. and start over once again
   */
  delete() {
    document.querySelectorAll(".track").forEach((track) => {
      track.innerHTML = "";
    });
  }

  slow() {
    this.m_speed = this.m_speed * 0.66666666;
  }

  shorten() {
    document.querySelector("#train_" + this.m_name).style.width =
      this.m_width * 0.66666666 + "px";
  }

  growth() {
    document.querySelector("#train_" + this.m_name).style.width =
      this.m_width * 1.33333333 + "px";
  }
}
