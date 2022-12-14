const task = document.querySelector(".task");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timeTag = document.querySelector(".time b");
const scoreElement = document.getElementById("score");

let shuffledQuestions, currentQuestionIndex;
let timer, scoreValue;

let isGameOver = false;
let timeLeft = 30;

/**
 *  timer is stopped at 0 and the game will end
 */
function initTimer() {
  if (timeLeft <= 0) {
    isGameOver = true;
    GameOver();
    return clearInterval(timer);
  }

  timeLeft--;
  timeTag.innerText = timeLeft;
}

/**
 * start the game when start button clicked
 */
startButton.addEventListener("click", startGame);

function startGame() {
  isGameOver = false;
  timeLeft = 30; // start with 30 second
  timer = setInterval(initTimer, 1000); // function for timer, so it counts down per second

  scoreElement.innerText = "0"; // start with score 0
  scoreValue = parseInt(scoreElement.innerText); // set score Value as int to work with it

  startButton.classList.add("hide"); // heid start btn
  shuffledQuestions = RandomArithmeticTask(); //get a random Question

  currentQuestionIndex = 0; // start with index 0
  questionContainerElement.classList.remove("hide"); // show the Question Container
  setNextQuestion(); // function to show the Question
}

/**
 * show Question if the game not over
 */
nextButton.addEventListener("click", () => {
  isGameOver ? GameOver() : setNextQuestion();
});

function setNextQuestion() {
  resetState();
  shuffledQuestions = RandomArithmeticTask();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(task);
  nextButton.classList.add("hide");

  while (answerButtonsElement.firstChild)
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  if (correct) {
    timeLeft += 5;
    scoreValue += 10;
    scoreElement.innerText = scoreValue;
  } else {
    timeLeft -= 5;
  }

  setStatusClass(task, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (!timeLeft <= 0) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  correct ? element.classList.add("correct") : element.classList.add("wrong");
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function GameOver() {
  questionContainerElement.classList.add("hide");
  nextButton.classList.add("hide");
  startButton.innerText = "Restart";
  startButton.classList.remove("hide");
}

function RandomArithmeticTask() {
  let number1 = getRandomIntInclusive(0, 100);
  let number2 = getRandomIntInclusive(0, 100);
  let operation = getRandomIntInclusive(0, 3);

  let answer = GetResult(number1, number2, operation);
  switch (operation) {
    case 0:
      operation = "+";
      break;
    case 1:
      operation = "-";
      break;
    case 2:
      operation = "*";
      break;
    case 3:
      operation = "/";
      break;
  }

  let result = [
    {
      question: "What is " + number1 + " " + operation + " " + number2 + " = ",
      answers: [
        { text: getRandomIntInclusive(0, 100), correct: false },
        { text: getRandomIntInclusive(0, 100), correct: false },
        { text: getRandomIntInclusive(0, 100), correct: false },
        { text: answer, correct: true },
      ],
    },
  ];

  shuffle(result[0].answers);

  return result;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function GetResult(_number1, _number2, _operation) {
  switch (_operation) {
    case 0:
      return _number1 + _number2;
    case 1:
      return _number1 - _number2;
    case 2:
      return _number1 * _number2;
    case 3:
      return _number1 / _number2;
  }
}
