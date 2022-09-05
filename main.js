const changeTaskDiv = document.createElement("div");
const prevTask = document.createElement("a");
const nextTask = document.createElement("a");
changeTaskDiv.setAttribute("id", "task-change");
changeTaskDiv.appendChild(prevTask);
changeTaskDiv.appendChild(nextTask);
document.querySelector("#main").appendChild(changeTaskDiv);

const tasks = [
    "helloWorld",
    "functions",
    "tables",
    "moveContainer",
    "animals",
    "numberRange",
    "memory",
    "timer",
    "trainStation",
];

let CurrentTask = window.location.pathname.split("Workshop/tasks/")[1];
CurrentTask = CurrentTask.split("/")[0];
const CurrentTaskIdx = tasks.indexOf(CurrentTask);

prevTask.href
    = CurrentTaskIdx <= 0
        ? "../Default/Default.html"
        : "../../tasks/" + tasks[CurrentTaskIdx - 1] + "/task.html";
prevTask.innerHTML = CurrentTaskIdx <= 0 ? "Start" : "<< Aufgabe " + CurrentTaskIdx;
nextTask.href
    = CurrentTaskIdx === -1
        ? "../../tasks/" + tasks[0] + "/task.html"
        : "../" + tasks[CurrentTaskIdx + 1] + "/task.html";
nextTask.innerHTML = "Aufgabe " + (CurrentTaskIdx + 2) + " >>";