const questions = [
    {
        question: 'Which is the largest animal in the world',
        answers: [
            { text: 'Shark', correct: false},
            {text: 'Blue Whale', correct: true},
            { text: 'Elephant', correct: false},
            { text: 'Giraffe', correct: false},
        ]
    },
    
    { question: 'Which is the largest desert in the world',
        answers: [
            { text: 'Gobi', correct: false},
            {text: 'Antarctica', correct: true},
            { text: 'Sahara', correct: false},
            { text: 'Kalahari', correct: false},
        ]
    },

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