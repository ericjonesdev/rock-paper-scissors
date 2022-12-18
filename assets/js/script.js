const computerChoiceDisplay = document.getElementById('computer-choice');
const buttons = document.getElementsByClassName('control');
const userChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const resultOutput = document.getElementById('result-output');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;
let result  ;
let playerChoice ;
let score = 0;
let mistakes = 0;
let scoreContainer;
let userSpan;
let computerSpan;
let playerScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let resetButton = document.getElementById("resetScore");


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    resultDisplay.innerHTML = userChoice;
    compChoice = generateComputerChoice();
    gameImages(userChoice, computerChoice);

    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult () {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }
    if (computerChoice === 'rock'  && userChoice === 'paper') {
        result = "You Win!";
        incrementUserScore();
        console.log("paperWin");
    }
    if (computerChoice === 'rock'  && userChoice === 'scissors') {
        result = "You lost!";
        incrementComputerScore();
    }
    if (computerChoice === 'paper'  && userChoice === 'scissors') {
        result = "You Win!";
        incrementUserScore();
    }
    if (computerChoice === 'paper'  && userChoice === 'rock') {
        result = "You lost!";
        incrementComputerScore();
    }
    if (computerChoice === 'scissors'  && userChoice === 'rock') {
        result = "You win!";
        incrementUserScore();
    }
    if (computerChoice === 'scissors'  && userChoice === 'paper') {
        result = "You lose!";
        incrementComputerScore();
    }
    resultOutput.innerHTML = result;
};
    
function gameImages(playerChoice, computerChoice) {
    console.log(playerChoice, computerChoice);

    playerImage.src = `assets/images/${playerChoice}.jpg`;
	playerImage.alt = choices [userChoice];

	computerImage.src = `assets/images/${computerChoice}.jpg`;
	computerImage.alt = choices[computerChoice];
}

/**
 * Gets the user score from the DOM and increments it by 1
 */
function incrementUserScore() {
    console.log("incrementing");
    // playerScore = playerScore++
    score++;
    playerScore.innerHTML = score;
    console.log(playerScore);
}


/**
 * Gets the computer score from the DOM and increments it by 1
 */
function incrementComputerScore() {
    mistakes++;
    compScore.innerHTML = score;
    console.log(compScore);

}

function resetScore() {
    score = 0;
    mistakes = 0;
    playerScore.innerHTML = score;
    compScore.innerHTML = mistakes;  

}