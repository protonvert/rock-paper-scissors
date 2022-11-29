let playerWins = 0;
let computerWins = 0;
let result = "";
const rockButton = document.getElementById('rock__button');
const paperButton = document.getElementById('paper__button');
const scissorsButton = document.getElementById('scissors__button');
const roundResultElement = document.querySelector('.content__round__result');
const content = document.querySelector('.content');
const scoreDiv = document.createElement('div');
const scoreText = document.createElement('span');

let roundResultFinal;


function generateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {               // getComputerChoice - randomly return either rock paper or scissors

    let randomSelect = generateRandom(1, 4); // generate number between 1 - 3    

    switch (randomSelect) {
        case 1:
            result = "Rock";
            break;

        case 2:
            result = "Paper";
            break;
        
        case 3:
            result = "Scissors";
            break;
    }

    

    return result;

}

function playRound(playerSelection, computerSelection){

    // list possible player win scenarios
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {

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
        roundResult = `Computer wins this round! Player selected: ${playerSelection} | Computer selected: ${computerSelection}`;
    }

    scoreInfo = `player wins: ${playerWins}, computer wins: ${computerWins}`;
    return roundResult;

}

content.appendChild(scoreDiv);
scoreDiv.appendChild(scoreText);

rockButton.addEventListener('click', () => {
    
    roundResultFinal = playRound('Rock', getComputerChoice());
    updateResult();
});

paperButton.addEventListener('click', () => {
    roundResultFinal = playRound('Paper', getComputerChoice());
    updateResult();
});

scissorsButton.addEventListener('click', () => {
    roundResultFinal = playRound('Scissors', getComputerChoice());
    updateResult();
});

function updateResult() {
    roundResultElement.innerText = roundResultFinal;
    console.log(roundResultElement.innerText);
    scoreText.innerHTML = scoreInfo;
}
