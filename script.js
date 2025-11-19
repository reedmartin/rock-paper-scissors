// Start //

/// function that randomly returns "rock", "paper", or scissors"
// function, random number between 0 and 3 and rounds it
function getComputerChoice() {
    let randomNum = Math.random() * 3;
    randomNum = Math.floor(randomNum);
    
    // evaluates what number was returned and assigns to either "Rock", "Paper", or "Scissors"
    if (randomNum == 0) {
        let computerChoice = "Rock"
        return computerChoice;
    }
    else if (randomNum == 1) {
        let computerChoice = "Paper"
        return computerChoice;
    }

    else {
        let computerChoice = "Scissors"
        return computerChoice;
    }
}
// tests to see if the computer choice is being generated and turned into an output we want //
console.log(getComputerChoice())
// human choice //
