const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const resultOutput = document.getElementById('result-output')
const playerImage = document.getElementById('player-image')
const computerImage = document.getElementById('computer-image')
let userChoice
let computerChoice
let result  

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    resultDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice 
}

function getResult () {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock'  && userChoice === 'paper') {
        result = "You Win!"
    }
    if (computerChoice === 'rock'  && userChoice === 'scissors') {
        result = "You lost!"
    }
    if (computerChoice === 'paper'  && userChoice === 'scissors') {
        result = "You Win!"
    }
    if (computerChoice === 'paper'  && userChoice === 'rock') {
        result = "You lost!"
    }
    if (computerChoice === 'scissors'  && userChoice === 'rock') {
        result = "You win!"
    }
    if (computerChoice === 'scissors'  && userChoice === 'paper') {
        result = "You lose!"
    }
    resultOutput.innerHTML = result
}
    
function reset () {
    computerChoice = '?'
    computerChoiceDisplay.innerHTML = computerChoice
    randomNumber = 0
    userChoice = '?'
    userChoiceDisplay.innerHTML = userChoice  
    resultDisplay.innerHTML = '?'
}
