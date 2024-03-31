const choice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
 const computerRandom = choice[Math.floor(Math.random() * choice.length)];  
    return computerRandom;
}

function playerSelection() {
    let playerAsk = prompt("Please choose Rock, Paper, or Scissors");
    console.log(playerAsk);
}

function playRound (playerSelection, getComputerChoice) {
    if (playerSelection === 'Rock' && computerRandom === 'Rock') {
        return "Draw!";
    }
    if (playerSelection === 'Rock' && computerRandom === 'Scissors') {
        return "Win!";
    }
    if (playerSelection === 'Rock' && computerRandom === 'Paper') {
        return "Lose!";
    }
    if (playerSelection === 'Paper' && computerRandom === 'Rock') {
        return "Win!";
    }
    if (playerSelection === 'Paper' && computerRandom === 'Paper') {
        return "Draw!";
    }
    if (playerSelection === 'Paper' && computerRandom === 'Scissors') {
        return "Lose!";
    }
    if (playerSelection === 'Scissors' && computerRandom === 'Scissors') {
        return "Draw!";
    }
    if (playerSelection === 'Scissors' && computerRandom === 'Rock') {
        return "Lose!";
    }
    if (playerSelection === 'Scissors' && computerRandom === 'Paper') {
        return "Win!";
    }
}