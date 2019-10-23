let round = 1;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            round++;
            return 'It\'s a tie! No winner this round.';
        } else if (computerSelection === 'paper') {
            computerScore++;
            round++;
            return 'You\'ve lost! Paper beats rock.';
        } else {
            playerScore++;
            round++;
            return 'You\'ve lost! Rock beats scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            round++;
            return 'You\'ve won! Paper beats rock.';
        } else if (computerSelection === 'paper') {
            round++;
            return 'It\'s a tie! No winner this round.';
        } else {
            computerScore++;
            round++;
            return 'You\'ve lost! Scissors beats paper.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            round++;
            return 'You\'ve lost! Rock beats scissors.';
        } else if (computerSelection === 'paper') {
            playerScore++;
            round++;
            return 'You\'ve won! Scissors beats paper.'
        } else {
            round++;
            return 'It\'s a tie! No winner this round.';
        }
    } else {
        return 'Please choose rock, paper, or scissors.';
    }
}

function game() {
    const playerSelection = prompt('Please select rock, paper, or scissors to play!', '');
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    if (round === 6) {
        if (playerScore > computerScore) {
            resetGame();
            return 'You win! Game over.'
        } else if (playerScore < computerScore) {
            resetGame();
            return 'You lose! Game over.'
        } else {
            resetGame();
            return 'It\'s a draw! Game over.';
        }
    }
}

function resetGame () {
    round = 1;
    playerScore = 0;
    computerScore = 0;
}
