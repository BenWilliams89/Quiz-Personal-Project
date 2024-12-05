const questions = [
    { // question 1
        question: 'Which is the largest animal in the world',
        answers: [
            { text: 'Shark', correct: false},
            {text: 'Blue Whale', correct: true},
            { text: 'Elephant', correct: false},
            { text: 'Giraffe', correct: false},
        ]
    },
    // question 2
    { question: 'Which is the largest desert in the world',
        answers: [
            { text: 'Gobi', correct: false},
            {text: 'Antarctica', correct: true},
            { text: 'Sahara', correct: false},
            { text: 'Kalahari', correct: false},
        ]
    },
// question 3
    {
        question: 'Which is the smallest continent in the world',
        answers: [
            { text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            { text: 'Arctic', correct: false},
            { text: 'Africa', correct: false},
        ]
    }

]

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() { // when quiz is stated it resets to 0 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next'; 
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
    })
}

startQuiz();

