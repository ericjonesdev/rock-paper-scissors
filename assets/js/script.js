/*variable statements follow*/

const choices = ["rock", "paper", "scissors"];
const resultOutput = document.getElementById('result-output');
let roundsPlayed = 0;

/**
 * This Array from statement within the function sets event listener to the button class control array
 * which listens for the user and computer choices which are fed to the getresult function
 */
function arrayMethod() {
    const resultDisplay = document.getElementById('result');
    const possibleChoices = document.getElementsByClassName('control');
    let computerChoice = document.getElementById('computer-choice').innerText;

Array.from(possibleChoices).forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    resultDisplay.innerHTML = userChoice;
    compChoice = generateComputerChoice();
    gameImages(userChoice, computerChoice);

    getResult();
}));
}


/**
 * This adds an event listener for the reset button
 */
document.getElementById("resetScore").addEventListener("click", resetScore);


/**
 * This function generates a random number for the computer and displays
 * the output to the innerHTML
 */
function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoiceDisplay = document.getElementById('computer-choice');
    computerChoiceDisplay.innerHTML = choices[randomNumber];
}

/**
 * Provides the logic to determin what to do in the event that either 
 * the user or computer wins, as well as what to do in the even of a draw.
 */
function getResult () {
    computerChoice = document.getElementById('computer-choice').innerText;
    userChoice = document.getElementById('result').innerText;
    if (computerChoice === userChoice) {
        result = "It's a draw!";
        resultOutput.innerHTML = result;
        completeRound();
    }
    else if (computerChoice === 'rock'  && userChoice === 'paper') {
        result = "You Win!";
        resultOutput.innerHTML = result;
        incrementUserScore();
    }
    else if (computerChoice === 'rock'  && userChoice === 'scissors') {
        result = "You lost!";
        resultOutput.innerHTML = result;
        incrementComputerScore();
    }
    else if (computerChoice === 'paper'  && userChoice === 'scissors') {
        result = "You Win!";
        resultOutput.innerHTML = result;
        incrementUserScore();
    }
    else if (computerChoice === 'paper'  && userChoice === 'rock') {
        result = "You lost!";
        resultOutput.innerHTML = result;
        incrementComputerScore();
    }
    else if (computerChoice === 'scissors'  && userChoice === 'rock') {
        result = "You win!";
        resultOutput.innerHTML = result;
        incrementUserScore();
    }
    else if (computerChoice === 'scissors'  && userChoice === 'paper') {
        result = "You lost!";
        resultOutput.innerHTML = result;
        incrementComputerScore();
    }
    resultOutput.innerHTML = result;
    toggleBackgroundColor();
}
    
/**
 * This function allows for the dynamic change of images based on user or 
 * computer choices.
 */
function gameImages(playerChoice, computerChoice) {
    playerChoice = document.getElementById("result").innerHTML;
    computerChoice = document.getElementById("computer-choice").innerHTML;
    const playerImage = document.getElementById('player-image');
    const computerImage = document.getElementById('computer-image');
    
    playerImage.src = `assets/images/${playerChoice}.jpg`;
	playerImage.alt = choices [userChoice];

	computerImage.src = `assets/images/${computerChoice}.jpg`;
	computerImage.alt = choices[computerChoice];
}

/**
 * Gets the user score from the DOM and increments it by 1
 */
function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("userScore").innerText);
    document.getElementById("userScore").innerText = ++oldScore;
    completeRound();
}


/**
 * Gets the computer score from the DOM and increments it by 1
 */
function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("compScore").innerText);
    document.getElementById("compScore").innerText = ++oldScore;
    completeRound();

}

/**
 * This function provides the logic used to reset the user and
 * computer score back to zero, upon the user request.
 */
function resetScore() {
    document.getElementById("userScore").innerText = 0;
    document.getElementById("compScore").innerText = 0; 
    roundsPlayed = 0;
}

/**
 * This function is to limit the amount of playable paper, rock, and scissors game to best out of 9
 */
function limitGameToBestOutOfNine () { 
    let score = parseInt(document.getElementById("userScore").innerText);
    let mistakes = parseInt(document.getElementById("compScore").innerText);


    if (score > mistakes) {
      alert('Player has won the game!');
    } else if (mistakes > score) {
      alert('Computer has won the game!');
    } else {
      alert('It\'s a tie!');
    }
  }
  
/***
 * This function limits the amount of games to below 10 and decides the winner
 * who receives the most wins out of 9 games
 */
function completeRound() {
        let userScore = parseInt(document.getElementById("userScore").innerText);
        let computerScore = parseInt(document.getElementById("compScore").innerText);
        
        roundsPlayed++
        console.log(roundsPlayed);
        if (roundsPlayed === 9) {
            limitGameToBestOutOfNine();
            resetScore();
        }

}

/***
 * This function toggles the background color of the .player .computer class
 * based on the winner of the current game. The winner color is green and the loser color is red
 */
function toggleBackgroundColor() {
    
    const player = document.getElementById('player');
    const computer = document.getElementById('computer');
    const winner = resultOutput.innerHTML.toLowerCase();
    

    if (winner.includes('you win')) {
        player.style.backgroundColor = "#00FF00"; 
        computer.style.backgroundColor = "#FF0000"; 
    } 
    else if (winner.includes('you lost')) {
        player.style.backgroundColor = "#FF0000"; 
        computer.style.backgroundColor = "#00FF00";
    } 
    else {
        player.style.backgroundColor = "#00FF00"; 
        computer.style.backgroundColor = "#00FF00";
    } 
}

document.onload = arrayMethod();