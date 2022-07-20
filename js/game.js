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

//array of questions
let questions=[
    {
        question:'Who is the president?',
        choice1:'4',
        choice2:'2',
        choice3:'21',
        choice4:'3',
        answer:'2',
    },
    {
        question:'2+3',
        choice1:'4',
        choice2:'2',
        choice3:'21',
        choice4:'5',
        answer:'5',
    },
    {
        question:'2+8',
        choice1:'4',
        choice2:'2',
        choice3:'10',
        choice4:'3',
        answer:'10',
    },
    {
        question:'7+2',
        choice1:'4',
        choice2:'2',
        choice3:'21',
        choice4:'9',
        answer:'9',
    },
    
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

//getting all values from questions array
startGame = () =>{
    questionCounter = 0,
    score = 0
    availableQuestions=[...questions]
    getNewQuestion()
}

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    


    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex,1)

    acceptingAnswers = true
}

choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion ? 'correct':'incorrect'

        if(classToApply ==='correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)


        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

         },1000)
        })
    })

    incrementScore = num =>{
        score += num
        scoreText.innerText =  score
    }
 startGame()
