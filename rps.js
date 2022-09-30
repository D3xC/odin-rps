const validChoices = ["ROCK","PAPER","SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let resultMessage = "";
let gameInProgress = false;
const play = document.querySelector("#play");
const result = document.querySelector("#result");
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");
const selections = document.querySelectorAll(".selections button");
play.addEventListener("click", startGame);
selections.forEach(selection => selection.addEventListener("click", playRound));

function playRound(e) {
  const playerChoice = this.id.toUpperCase();
  const computerChoice = validChoices[Math.floor(Math.random() * validChoices.length)];
  switch(playerChoice) {
    case "ROCK":
      if (computerChoice == "SCISSORS") {
        playerScore++;
        resultMessage = "You Win! Rock beats Scissors";
      }
      if (computerChoice == "PAPER") {
        computerScore++;
        resultMessage = "You Lose! Paper beats Rock";
      }
      if (computerChoice == "ROCK") {
        resultMessage = "It's a Draw!";
      }
      break;
    case "PAPER":
      if (computerChoice == "ROCK") {
        playerScore++;
        resultMessage = "You Win! Paper beats Rock";
      }
      if (computerChoice == "SCISSORS") {
        computerScore++;
        resultMessage = "You Lose! Scissors beats Paper";
      }
      if (computerChoice == "PAPER") {
        resultMessage = "It's a Draw!";
      }
      break;
    case "SCISSORS":
      if (computerChoice == "PAPER") {
        playerScore++;
        resultMessage = "You Win! Scissors beats Paper ";
      }
      if (computerChoice == "ROCK") {
        computerScore++;
        resultMessage = "You Lose! Rock beats Scissors";
      }
      if (computerChoice == "SCISSORS") {
        resultMessage = "It's a Draw!";
      }
      break;
  }
  player.textContent = playerScore;
  computer.textContent = computerScore;
  result.textContent = resultMessage;
  if (playerScore == 5 || computerScore == 5) {
    endGame(playerScore, computerScore);
  }
}

function startGame(e) {
  playerScore = 0;
  computerScore = 0;
  resultMessage = "";
  gameInProgress = true;
  player.textContent = playerScore;
  computer.textContent = computerScore;
  result.textContent = resultMessage;
}

function endGame (player, computer) {
  if (player > computer) {
    resultMessage = "Player wins: " + player + " to " + computer;
  } else if (player < computer) {
    resultMessage = "Player loses: " + player + " to " + computer;
  } else {
    resultMessage = "It's a draw: " + player + " to " + computer;
  }
  result.innerHTML = resultMessage;
  gameInProgress = false;
}