/*variable statements follow*/
const computerChoiceDisplay = document.getElementById('computer-choice');
const buttons = document.getElementsByClassName('control');
const userChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.getElementsByClassName('control');
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
let compChoice;

/**
 * This Array from statement sets event listener to the button class control array
 * which listens for the user and computer choices which are fed to the getresult function
 */
Array.from(possibleChoices).forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    resultDisplay.innerHTML = userChoice;
    compChoice = generateComputerChoice();
    gameImages(userChoice, computerChoice);

    getResult();
}));

/**
 * This adds an event listener for the reset button
 */
document.getElementById("resetScore").addEventListener("click", resetScore);


/**
 * This function generates a random number for the computer and displays
 * the output to the innerHTML
 */
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

/**
 * Provides the logic to determin what to do in the event that either 
 * the user or computer wins, as well as what to do in the even of a draw.
 */
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
}
    
/**
 * This function allows for the dynamic change of images based on user or 
 * computer choices.
 */
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
    compScore.innerHTML = mistakes;
    console.log(compScore);

}

/**
 * This function provides the logic used to reset the user and
 * computer score back to zero, upon the user request.
 */
function resetScore() {
    score = 0;
    mistakes = 0;
    playerScore.innerHTML = score;
    compScore.innerHTML = mistakes;  

}

/**
 * This function is to limit the amount of playable paper, rock, and scissors game to best out of 9
 */
function limitGameToBestOutOfTen () { 
    // Variables to store the player and computer scores
    let playerScore = 0;
    let compScore = 0;
  
    // Create a loop to limit the game to 9 rounds
    for (let i = 0; i < 9; i++) {
      // Play a round of paper, rock, scissors
      let result = playRound();
  
      // Add the result to the respective scores
      if (result === 'player') {
        playerScore++;
      } else if (result === 'computer') {
        compScore++;
      }
    }
  
    // Check who has the higher score
    if (playerScore > compScore) {
      alert('Player has won the game!');
    } else if (compScore > playerScore) {
      alert('Computer has won the game!');
    } else {
      alert('It\'s a tie!');
    }
  
    // Reset the scores 
    playerScore = 0;
    compScore = 0;
  }
  