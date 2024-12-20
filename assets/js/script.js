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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){ // removes the placeholder answers and fills with the answers we chose
    nextButton.style.display = 'none';
    backButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++ // this adds 1 to the score for each true answer
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true // this stops a button being clicked when answer is selected
    });
    nextButton.style.display = 'inline-block'
    backButton.style.display = 'inline-block' // inline block helps align the buttons on one line
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz()
    }
})

backButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        showScore();
    } else {
        showScore();
    }
})

startQuiz();

