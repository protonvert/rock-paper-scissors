// rock paper scissors game will be completely playable from console

let playerWins = 0;
let computerWins = 0;
let winner;

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

    return result;

}


// cretae a function that plays a single round of rock paper scissors
// should take in two paramaters, playerSelection and computerSelection
// then it should return a string that declares winner of round
// i.e "You Lose! Paper beats rock"
    // make functions playerselection paramater, case insensitive

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    let roundResult = `debug ***********`; // delete this later

    // list possible player win scenarios
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

            playerWins++;
            roundResult = `Player wins this round! ${playerSelection} beats ${computerSelection}!`;
    }

    // list tie scenarios
    else if (playerSelection == computerSelection){

        roundResult = `Tie! ${playerSelection} == ${computerSelection}`;
        
    }

    // else computer won scenario
    else {
        computerWins++;
        roundResult = `Computer wins this round! ${computerSelection} beats ${playerSelection}!`;
    }

    return roundResult;

}


// return results, not console.log them

// write a new function called game(), call playround function inside of
// this one to play a 5 round game that keeps score and reports
// a winner/loser at end

function game(playerSelection){

    computerWins = 0;
    playerWins = 0;

    for (let i = 0; i < 5; i++){
        
        playRound(playerSelection, getComputerChoice());

        console.log(`Computer: ${computerWins} | Player: ${playerWins}`);
        
    }

    if (playerWins > computerWins) {
        winner = "player!";
    }
    else if (computerWins > playerWins) {
        winner = "computer!";
    }
    else {
        winner = "No one! It's a tie!";
    }

    console.log(`Winner is: ${winner}`);

}


// console.log() results at of eachh round and winner at end