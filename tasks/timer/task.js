
const task = document.querySelector('.task')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.getElementById('timer')
const scoreElement = document.getElementById('score')

let shuffledQuestions, currentQuestionIndex
let timerValue, scoreValue

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    if(timerValue > 0) {
        currentQuestionIndex++
        setNextQuestion()
    } else {
        questionContainerElement.classList.add('hide')
        nextButton.classList.add('hide')
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

})

function startGame() {
  timerElement.innerText = '30'
  timerValue = parseInt(timerElement.innerText);

  scoreElement.innerText = '0'
  scoreValue = parseInt(scoreElement.innerText);

  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(task)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  if(correct) {
    timerValue += 5 
    timerElement.innerText = timerValue
    scoreValue += 10 
    scoreElement.innerText = scoreValue
  } else {
    timerValue -= 5 
    timerElement.innerText = timerValue
  }

  setStatusClass(task, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question: "What is 11 + 12 + 13 = ?",
        answers: [
            {text: '35', correct: false},
            {text: '36', correct: true},
            {text: '37', correct: false},
            {text: '33', correct: false}
        ]
    },
    {
        question: "What is 17 * 2 + 49 = ?",
        answers: [
            {text: '83', correct: true},
            {text: '82', correct: false},
            {text: '81', correct: false},
            {text: '80', correct: false}
        ]
    },
    {
        question: "What is 347 + 398 = ?",
        answers: [
            {text: '640', correct: false},
            {text: '740', correct: false},
            {text: '745', correct: true},
            {text: '645', correct: false}
        ]
    },
    {
        question: "What is 444 / 3 = ?",
        answers: [
            {text: '144', correct: false},
            {text: '148', correct: true},
            {text: '142', correct: false},
            {text: '143', correct: false}
        ]
    },
    {
        question: "What is 58 + 9 = ?",
        answers: [
            {text: '69', correct: false},
            {text: '68', correct: false},
            {text: '67', correct: true},
            {text: '66', correct: false}
        ]
    },
    {
        question: "What is 8 * 12 / 8 = ?",
        answers: [
            {text: '8', correct: false},
            {text: '12', correct: true},
            {text: '21', correct: false},
            {text: '80', correct: false}
        ]
    },
    {
        question: "What is 7 + 7 = ?",
        answers: [
            {text: '15', correct: false},
            {text: '16', correct: false},
            {text: '14', correct: true},
            {text: '13', correct: false}
        ]
    },
    {
        question: "What is 849 + 894 + 257 = ?",
        answers: [
            {text: '5000', correct: false},
            {text: '4000', correct: false},
            {text: '3000', correct: false},
            {text: '2000', correct: true}
        ]
    },
    {
        question: "What is 9 + 9 = ?",
        answers: [
            {text: '15', correct: false},
            {text: '16', correct: false},
            {text: '17', correct: false},
            {text: '18', correct: true}
        ]
    },
    {
        question: "What is 10 + 10 / 10 = ?",
        answers: [
            {text: '20', correct: false},
            {text: '11', correct: true},
            {text: '2', correct: false},
            {text: '21', correct: false}
        ]
    }
]
