// Start //

/// step 1- 2 function that randomly returns "rock", "paper", or scissors"
// function, random number between 0 and 3 and rounds it
function getComputerChoice() {
    let randomNum = Math.random() * 3;
    randomNum = Math.floor(randomNum);
    
    // evaluates what number was returned and assigns to either "Rock", "Paper", or "Scissors"
    if (randomNum == 0) {
        let computerChoice = "rock"
        return computerChoice;
    }
    else if (randomNum == 1) {
        let computerChoice = "paper"
        return computerChoice;
    }

    else {
        let computerChoice = "scissors"
        return computerChoice;
    }
}
// tests to see if the computer choice is being generated and turned into an output we want //
// console.log(getComputerChoice()) //
// step 3 human choice //
function getHumanChoice() {
    let humanChoice = prompt('Enter Rock, Paper or Scissors', " ")
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
// step 4 declare the players score variables //
let humanScore = 0;
let computerScore = 0;


// step 5 play round game function //
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && (computerChoice == "scissors")) {
        alert('You win!');
        humanScore++;
    }
    else if (humanChoice == "paper" && (computerChoice == "rock")) {
        alert('You win!');
        humanScore++;
    }
    else if (humanChoice == "scissors" && (computerChoice == "paper")) {
        alert('You win!');
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
        alert('Tie');
    }
    else {
        alert('You lose');
        computerScore++;
    }  
}
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log("Computer chose: " + computerChoice);
console.log("Human chose: " + humanChoice);
console.log(playRound(humanChoice, computerChoice));

//step 6 play game function //