const choice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
 const computerRandom = choice[Math.floor(Math.random() * choice.length)];  
    return computerRandom;
}

function playerSelection() {
    const playerChoice = prompt("Please choose Rock, Paper, or Scissors.")
}