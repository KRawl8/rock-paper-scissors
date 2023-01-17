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

    const choicePlayer = document.querySelector('#playerChoice');
    choicePlayer.textContent = playerSelection;

    const choiceComputer = document.querySelector('#computerChoice');
    choiceComputer.textContent = computerSelection;
  
    whoWon.textContent = "";

    // console.log(`Computers choice: ${computerSelection}`);
    // console.log(`Players choice: ${playerSelection}`);
    if (playerSelection === computerSelection) {
        roundResult.textContent = `You both chose ${playerSelection}. It's a draw!`;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerScore++;
            roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerScore++;
            roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }    

    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        whoWon.textContent = "You win!";
    } else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        whoWon.textContent = "You Lose!";
    }

}

const roundResult = document.querySelector('#whoWonTheRound');

const scorePlayer = document.querySelector('#playerScore');
const scoreComputer = document.querySelector('#computerScore');

const whoWon = document.querySelector('#whoWonTheGame');

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});