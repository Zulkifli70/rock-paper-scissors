# rock-paper-scissors
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

// console.log("Computer Choice is", getComputerChoice());

function getHumanChoice() {
  let input = prompt("Tentukan Pilihanmu !");
  return input.toLowerCase();
}

// console.log("Your Choice is", getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("your score:", humanScore);
console.log("your score:", computerScore);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Its a tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "scissor" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log("You win!!", `${humanChoice} beat ${computerChoice}`);
      humanScore++;
    } else {
      console.log("You Lose!!", `${computerChoice} beat ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(`Final Score is: you ${humanScore}, computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations, You win!!");
  } else if (humanScore < computerScore) {
    console.log("Crap!! You Lose!!");
  }
}
