// Step 1: Computer choice (this is fine, keep it as is)
function getComputerChoice() {
    let randomNum = Math.random() * 3;
    randomNum = Math.floor(randomNum);

    if (randomNum == 0) {
        return "rock";
    }
    else if (randomNum == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Step 2: Score variables (keep these)
let humanScore = 0;
let computerScore = 0;

// Step 3: Play one round (keep this, but we'll call it from button clicks)
function playRound(humanChoice, computerChoice) {
    scoreBoard.textContent = `Your score is ${humanScore} the computer's score is ${computerScore}`;
    if (humanChoice == "Rock" && computerChoice == "scissors") {
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "rock") {
        humanScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "paper") {
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
    }
    else {

        computerScore++;
    }

    // After each round, check if game is over
    checkGameOver();
}

// Step 4: Check if anyone reached 5 points
function checkGameOver() {
    if (humanScore === 5) {
        alert("Game Over! You win! Final score: You " + humanScore + " - Computer " + computerScore);
        resetGame();
    }
    else if (computerScore === 5) {
        alert("Game Over! Computer wins! Final score: You " + humanScore + " - Computer " + computerScore);
        resetGame();
    }
}

// Step 5: Reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

// Step 6: Set up button listeners
let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        let humanChoice = e.target.textContent;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});



// step 7 Set up score counter
let scoreBlock = document.querySelector("#scoreBlock");
let scoreBoard = document.createElement("h3")
scoreBlock.appendChild(scoreBoard);

