// rock paper scissors game will be completely playable from console

let playerWins = 0;
let computerWins = 0;
let winner;
let result = "";


function generateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// create function getComputerChoice - randomly return either rock paper or scissors

function getComputerChoice() {

    let randomSelect = generateRandom(1, 4); // generate number between 1 - 3    

    switch (randomSelect) {
        case 1:
            result = "rock";
            break;

        case 2:
            result = "paper";
            break;
        
        case 3:
            result = "scissors";
            break;
    }

    

    return result.charAt(0).toUpperCase() + result.slice(1);

}


function playRound(playerSelection, computerSelection){

    // list possible player win scenarios
    if ((playerSelection == "Rock" && computerSelection == "scissors") ||
        (playerSelection == "Paper" && computerSelection == "rock") ||
        (playerSelection == "Scissors" && computerSelection == "paper")) {

            playerWins++;
            roundResult = `Player wins this round! Player selected: ${playerSelection} | Computer selected: ${computerSelection}`;
    }

    // list tie scenarios
    else if (playerSelection == computerSelection){

        roundResult = `Tie! Player selected: ${playerSelection} | Computer selected: ${computerSelection}`;
        
    }

    // else computer won scenario
    else {
        computerWins++;
        roundResult = `Computer wins this round! Player selected: ${playerSelection} | Computer selected: ${computerSelection}!`;
    }

    return roundResult;

}

const rockButton = document.getElementById('rock__button');
const paperButton = document.getElementById('paper__button');
const scissorsButton = document.getElementById('scissors__button');

rockButton.addEventListener('click', () => {
    console.log(playRound('Rock', getComputerChoice()));
});

paperButton.addEventListener('click', () => {
    console.log(playRound('Paper', getComputerChoice()));
});

scissorsButton.addEventListener('click', () => {
    console.log(playRound('Scissors', getComputerChoice()));
});