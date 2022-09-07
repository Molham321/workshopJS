let questions = [
    {
        prompt: "1 + 1 = ?\n(a) 1\n(b) 2\n(c) 3\n(d) 4",
        answer: "a"
    },
    {
        prompt: "2 + 2 = ?\n(a) 1\n(b) 4\n(c) 3\n(d) 4",
        answer: "b"
    },    {
        prompt: "3 + 3 = ?\n(a) 1\n(b) 2\n(c) 6\n(d) 4",
        answer: "c"
    },    {
        prompt: "4 + 4 = ?\n(a) 1\n(b) 2\n(c) 3\n(d) 8",
        answer: "d"
    },    {
        prompt: "5 + 5 = ?\n(a) 10\n(b) 2\n(c) 3\n(d) 4",
        answer: "a"
    },
]

let score = 0;
let time = 0;

document.getElementById('score').innerText = score;
document.getElementById('timer').innerText = time;

document.getElementById('mission').innerHTML = questions[0]


// for (let i = 0; i < questions.length; i++) {



//     let mission = document.getElementById('mission')
//     mission.innerText = questions[i].prompt;

//     if(mission == questions[i].answer) {
//         score++;
//         alert("Correct!");
//     } else {
//         alert("WRONG!");
//     }

//     score = document.getElementById('score')
// }