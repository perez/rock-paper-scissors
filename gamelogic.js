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
            return 'It\'s a tie! No winner this round.';
        } else if (computerSelection === 'paper') {
            return 'You\'ve lost! Paper beats rock.';
        } else {
            return 'You\'ve lost! Rock beats scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You\'ve won! Paper beats rock.';
        } else if (computerSelection === 'paper') {
            return 'It\'s a tie! No winner this round.';
        } else {
            return 'You\'ve lost! Scissors beats paper.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You\'ve lost! Rock beats scissors.';
        } else if (computerSelection === 'paper') {
            return 'You\'ve won! Scissors beats paper.'
        } else {
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
            return 'You win! Game over.'
        } else if (playerScore < computerScore) {
            return 'You lose! Game over.'
        } else {
            return 'It\'s a draw! Game over.';
        }
    }
}
