//****** VARIABLES ******//

const roundCounter = document.querySelector('.round-counter')
const playerScoreCounter = document.querySelector('.player-counter');
const computerScoreCounter = document.querySelector('.computer-counter');
const selectText = document.querySelector('.select-text');
const rockBtn = document.querySelector('#rock.btn');
const paperBtn = document.querySelector('#paper.btn');
const scissorsBtn = document.querySelector('#scissors.btn');

let round = 1;
let playerScore = 0;
let computerScore = 0;

//****** GAMEPLAY FUNCTIONS ******//

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return 'ROCK';
    } else if (randomNum === 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

function playRound() {
    if (playerSelection === 'rock') {
        if (computerPlay() === 'ROCK') {
            selectText.textContent = 'It\'s a tie! No winner this round.';
        } else if (computerPlay() === 'PAPER') {
            selectText.textContent = 'You\'ve lost! Paper beats rock.';
        } else {
            selectText.textContent = 'You\'ve lost! Rock beats scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerPlay() === 'ROCK') {
            selectText.textContent = 'You\'ve won! Paper beats rock.';
        } else if (computerPlay() === 'PAPER') {
            selectText.textContent = 'It\'s a tie! No winner this round.';
        } else {
            selectText.textContent = 'You\'ve lost! Scissors beats paper.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerPlay() === 'ROCK') {
            selectText.textContent = 'You\'ve lost! Rock beats scissors.';
        } else if (computerPlay() === 'PAPER') {
            selectText.textContent = 'You\'ve won! Scissors beats paper.';
        } else {
            selectText.textContent = 'It\'s a tie! No winner this round.';
        }
    }
}

function game() {
    const playerSelection = prompt('Please select rock, paper, or scissors to play!', '');
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    if (round === 6) {
        if (playerScore > computerScore) {
            return 'You win! Game over.'
        } else if (playerScore < computerScore) {
            return 'You lose! Game over.'
        } else {
            return 'It\'s a draw! Game over.';
        }
    }
}

//****** SCORE FUNCTIONS ******//


//****** EVENT LISTENERS ******//