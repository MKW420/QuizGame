const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = {}

let questions=[
    {
        question:'2+2',
        choice1:'4',
        choice2:'2',
        choice3:'21',
        choice4:'3',
        answer:'2',
    },
    {
        question:'2+2',
        choice1:'4',
        choice2:'2',
        choice3:'21',
        choice4:'3',
        answer:'2',
    },
    {
        question:'2+2',
        choice1:'4',
        choice2:'2',
        choice3:'21',
        choice4:'3',
        answer:'2',
    },
    {
        question:'2+2',
        choice1:'4',
        choice2:'2',
        choice3:'21',
        choice4:'3',
        answer:'2',
    },
    
]
