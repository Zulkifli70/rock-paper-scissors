// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize score display
  if (humanScoreDisplay) humanScoreDisplay.textContent = "0";
  if (computerScoreDisplay) computerScoreDisplay.textContent = "0";
  if (textDisplay)
    textDisplay.textContent = "Choose your move to start playing!";
});

const textDisplay = document.querySelector(".text_display");
const humanDisplay = document.querySelector(".humanDisplay");
const computerDisplay = document.querySelector(".computerDisplay");
const humanScoreDisplay = document.querySelector(".humanScore");
const computerScoreDisplay = document.querySelector(".computerScore");

let humanScore = 0;
let computerScore = 0;
let gameEnded = false;

function getComputerChoice() {
  let random = Math.random();

  if (random < 1 / 3) {
    return "rock";
  } else if (random > 1 / 3 && random < 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(humanChoice) {
  // Cek apakah game sudah berakhir
  if (gameEnded) {
    return;
  }

  const computerChoice = getComputerChoice();
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `Its a tie!!!, You both using ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    resultMessage = `You Win!!!!!, ${humanChoice} win against ${computerChoice}`;
    humanScore++;
  } else {
    resultMessage = `You lose!!, ${computerChoice} win against ${humanChoice}`;
    computerScore++;
  }

  // Update displays
  humanDisplay.textContent = `Human choose ${humanChoice}`;
  computerDisplay.textContent = `Computer choose ${computerChoice}`;
  textDisplay.textContent = `Round Result: ${resultMessage}`;

  // Update scores
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  // Check for winner
  if (humanScore === 5) {
    textDisplay.textContent = "🎉 Congratulations! You are the Champion! 🎉";
    gameEnded = true;
    showNewGameButton();
  } else if (computerScore === 5) {
    textDisplay.textContent = "💻 Computer Wins! Better luck next time! 💻";
    gameEnded = true;
    showNewGameButton();
  }
}

function showNewGameButton() {
  const gameHistory = document.querySelector(".game_history");
  if (gameHistory) {
    gameHistory.innerHTML = `
      <button onclick="startNewGame()" style="
        background: #4CAF50;
        color: white;
        border: none;
        padding: 15px 30px;
        font-size: 18px;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 20px;
        transition: background 0.3s ease;
      " onmouseover="this.style.background='#45a049'" onmouseout="this.style.background='#4CAF50'">
        🔄 Start New Game
      </button>
    `;
  } else {
    // Jika game_history tidak ditemukan, tambahkan tombol ke text_display
    textDisplay.innerHTML += `
      <br><br>
      <button onclick="startNewGame()" style="
        background: #4CAF50;
        color: white;
        border: none;
        padding: 15px 30px;
        font-size: 18px;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 20px;
        transition: background 0.3s ease;
      " onmouseover="this.style.background='#45a049'" onmouseout="this.style.background='#4CAF50'">
        🔄 Start New Game
      </button>
    `;
  }
}

function startNewGame() {
  // Reset semua variabel
  humanScore = 0;
  computerScore = 0;
  gameEnded = false;

  // Reset tampilan
  humanScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  humanDisplay.textContent = "";
  computerDisplay.textContent = "";
  textDisplay.innerHTML = "Choose your move to start playing!";

  // Hapus tombol new game
  const gameHistory = document.querySelector(".game_history");
  if (gameHistory) {
    gameHistory.innerHTML = "";
  }
}
