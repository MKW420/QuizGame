const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = {}

//array of questions
let questions=[
    {
        question:'What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?',
        choice1:'2005',
        choice2:'2008',
        choice3:'2010',
        choice4:'2012',
        answer:'2008',
    },
    {
        question:'What is the name of Thor’s hammer?',
        choice1:'Vanir',
        choice2:'Mjolnir',
        choice3:'Aesir',
        choice4:'Norn',
        answer:'Mjolnir',
    },
    {
        question:'In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?',
        choice1:'That he wants to study The Hulk',
        choice2:'That he knows about S.H.I.E.L.D.',
        choice3:'That they are putting a team together',
        choice4:'That Thaddeus owes him money',
        answer:'That they are putting a team '
    },
    {
        question:'What is Captain America’s shield made of??',
        choice1:'Adamantium',
        choice2:'Vibranium',
        choice3:'Promethium',
        choice4:'Carbonadium',
        answer:'Vibranium'
    },
    {
        question:'What is the real name of the Black Panther?',
        choice1:'T’Challa',
        choice2:'M’Baku',
        choice3:'N’Jadaka',
        choice4:'N’Jobu',
        answer:'T’Challa'
    },
    {
        question:'What fake name does Natasha use when she first meets Tony?',
        choice1:'Natalie Rushman',
        choice2:'Natalia Romanoff',
        choice3:'Nicole Rohan',
        choice4:'Naya Rabe',
        answer:' Natalie Rushman'
    },
    {
        question:'Who is Black Panther’s sister?',
        choice1:'Shuri',
        choice2:'Nakia',
        choice3:'Ramonda',
        choice4:'Okoye',
        answer:'Shuri'
    },
    {
        question:'What type of doctor is Stephen Strange?',
        choice1:'Neurosurgeon',
        choice2:'Cardiothoracic Surgeon',
        choice3:'Trauma Surgeon',
        choice4:'Plastic Surgeon',
        answer:'Neurosurgeon'
    },
    {
        question:'How about an easy one to start? What actor plays the role of Iron Man?',
        choice1:'Robert Downey Jr.',
        choice2:'Tom Hiddleston',
        choice3:'Mark Ruffalo',
        choice4:'Liam Hemsworth',
        answer:'Robert Downey Jr.'
    },
    {
        question:'This film in the Marvel universe is the highest grossing film in the franchise with $858 million?',
        choice1:'Avengers: Age of Ultron',
        choice2:'Avengers',
        choice3:'Avengers: Endgame',
        choice4:'Avengers: Infinity War',
        answer:'Avengers: Endgame'
    }
    
    
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

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

        return window.location.assign('/QuizGame/end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
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

        let classToApply = choice.innerText == currentQuestion.answer ? 'correct':'incorrect'
        
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
    
incrementScore = num => {
    score += num
    scoreText.innerText = score
    //console.log( score)
}

    

 startGame()
