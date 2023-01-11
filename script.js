let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let playRound = (playerSelection, computerSelection) => {
    console.log(`Computers choice: ${computerSelection}`);
    console.log(`Players choice: ${playerSelection}`);
    if (playerSelection === computerSelection) {
        return `You both chose ${playerSelection}. It's a draw!`;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }    
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose Rock, Paper or Scissors");
        let playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        return "You Win!";
    } else if (playerScore === computerScore) {
        return "It's a draw";
    } else {
        return "You Lose!";
    }
}
console.log(game());
