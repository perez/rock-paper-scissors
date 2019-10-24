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

const computerPlay = () => {
    const rpsArray = ['ROCK', 'PAPER', 'SCISSORS'];
    return rpsArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerPlay) {
    if (playerSelection === 'rock') {
        if (computerPlay === 'ROCK') {
            selectText.textContent = 'It\'s a tie! No winner this round.';
            addRound();
        } else if (computerPlay === 'PAPER') {
            selectText.textContent = 'You\'ve lost! Paper beats rock.';
            addRound();
            addComputerScore();
        } else {
            selectText.textContent = 'You\'ve won! Rock beats scissors.';
            addRound();
            addPlayerScore();
        }
    } else if (playerSelection === 'paper') {
        if (computerPlay === 'ROCK') {
            selectText.textContent = 'You\'ve won! Paper beats rock.';
            addRound();
            addPlayerScore();
        } else if (computerPlay === 'PAPER') {
            selectText.textContent = 'It\'s a tie! No winner this round.';
            addRound();
        } else {
            selectText.textContent = 'You\'ve lost! Scissors beats paper.';
            addRound();
            addComputerScore();
        }
    } else if (playerSelection === 'scissors') {
        if (computerPlay === 'ROCK') {
            selectText.textContent = 'You\'ve lost! Rock beats scissors.';
            addRound();
            addComputerScore();
        } else if (computerPlay === 'PAPER') {
            selectText.textContent = 'You\'ve won! Scissors beats paper.';
            addRound();
            addPlayerScore();
        } else {
            selectText.textContent = 'It\'s a tie! No winner this round.';
            addRound();
        }
    }
}

function game() {
    const playerSelection = prompt('Please select rock, paper, or scissors to play!', '');
    const computerSelection = computerPlay;

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

function addRound() {
    round++;
    roundCounter.textContent = round;
}

function addPlayerScore() {
    playerScore++;
    playerScoreCounter.textContent = playerScore;
}

function addComputerScore() {
    computerScore++;
    computerScoreCounter.textContent = computerScore;
}

//****** EVENT LISTENERS ******//

rockBtn.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});