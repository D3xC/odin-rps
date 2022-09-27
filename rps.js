const validChoices = ["ROCK","PAPER","SCISSORS"];
let playerScore;
let computerScore;
function getComputerChoice() {
  const computerSelection = validChoices[Math.floor(Math.random() * validChoices.length)];
  return computerSelection;
}

function getPlayerChoice() {
  let validChoice = false;
  let playerSelection;
  do {
    playerSelection = prompt("Choose 1: Rock. Paper or Scissors?").toUpperCase();
    validChoice = validChoices.includes(playerSelection);
  } while (!validChoice);
  return playerSelection;
}

function playRound(playerChoice, computerChoice) {
  console.log("Player: " + playerChoice + "; Computer: " + computerChoice);
  switch(playerChoice) {
    case "ROCK":
      if (computerChoice == "SCISSORS") {
        playerScore++;
        return "You Win! Rock beats Scissors";
      }
      if (computerChoice == "PAPER") {
        computerScore++;
        return "You Lose! Paper beats Rock";
      }
      if (computerChoice == "ROCK") {
        return "It's a Draw!";
      }
    case "PAPER":
      if (computerChoice == "ROCK") {
        playerScore++;
        return "You Win! Paper beats Rock";
      }
      if (computerChoice == "SCISSORS") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
      }
      if (computerChoice == "PAPER") {
        return "It's a Draw!";
      }
    case "SCISSORS":
      if (computerChoice == "PAPER") {
        playerScore++;
        return "You Win! Scissors beats Paper ";
      }
      if (computerChoice == "ROCK") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
      }
      if (computerChoice == "SCISSORS") {
        return "It's a Draw!";
      }
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;
  let result = "";
  for (i = 1; i <= 5 ; i++) {
    result = playRound(getPlayerChoice(),getComputerChoice());
  }
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + computerScore);
  if (playerScore > computerScore) {
    console.log("Player wins");
  } else if (playerScore < computerScore) {
    console.log("Computer wins");
  } else {
    console.log("It's a Draw!");
  }
}