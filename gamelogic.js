//****** VARIABLES ******//

const roundCounter = document.querySelector('.round-counter')
const playerScoreCounter = document.querySelector('.player-counter');
const computerScoreCounter = document.querySelector('.computer-counter');
const selectText = document.querySelector('.select-text');
const rockBtn = document.querySelector('#rock.btn');
const paperBtn = document.querySelector('#paper.btn');
const scissorsBtn = document.querySelector('#scissors.btn');
const newGameBtn = document.querySelector('#new-game.btn')

let round = 1;
let playerScore = 0;
let computerScore = 0;

newGameBtn.style.display = 'none';
newGameBtn.disabled = true;

//****** GAMEPLAY FUNCTIONS ******//

const computerPlay = () => {
    const rpsArray = ['ROCK', 'PAPER', 'SCISSORS'];
    return rpsArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerPlay) {
    if (playerSelection === 'rock') {
        if (computerPlay === 'ROCK') {
            selectText.textContent = 'It\'s a tie! No winner this round.';
        } else if (computerPlay === 'PAPER') {
            selectText.textContent = 'You\'ve lost! Paper beats rock.';
            addComputerScore();
        } else {
            selectText.textContent = 'You\'ve won! Rock beats scissors.';
            addPlayerScore();
        }
    } else if (playerSelection === 'paper') {
        if (computerPlay === 'ROCK') {
            selectText.textContent = 'You\'ve won! Paper beats rock.';
            addPlayerScore();
        } else if (computerPlay === 'PAPER') {
            selectText.textContent = 'It\'s a tie! No winner this round.';
        } else {
            selectText.textContent = 'You\'ve lost! Scissors beats paper.';
            addComputerScore();
        }
    } else if (playerSelection === 'scissors') {
        if (computerPlay === 'ROCK') {
            selectText.textContent = 'You\'ve lost! Rock beats scissors.';
            addComputerScore();
        } else if (computerPlay === 'PAPER') {
            selectText.textContent = 'You\'ve won! Scissors beats paper.';
            addPlayerScore();
        } else {
            selectText.textContent = 'It\'s a tie! No winner this round.';
        }
    }
    addRound();
    if (round === 5) {
        game();
        newGameBtn.style.display = 'inline-block';
        newGameBtn.disabled = false;
        [rockBtn.disabled, paperBtn.disabled, scissorsBtn.disabled] = [true, true, true];
    }
}

function game() {
    if (playerScore > computerScore) {
        selectText.textContent = 'You win! Game over.';
    } else if (playerScore < computerScore) {
        selectText.textContent = 'You lose! Game over.';
    } else {
        selectText.textContent = 'It\'s a draw! Game over.';
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

const resetScore = () => {
    [round, roundCounter.textContent] = [1, 1];
    [playerScore, playerScore.textContent] = [0, 0];
    [computerScore, computerScore.textContent] = [0, 0];
    selectText.textContent = 'Select your hand!';
    newGameBtn.style.display = 'none';
    [rockBtn.disabled, paperBtn.disabled, scissorsBtn.disabled] = [false, false, false];
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