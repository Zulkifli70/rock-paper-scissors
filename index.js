// Make a rock paper scissor game
// Make Computer choice that will choose between rock paper and scissor
// Make human choice using prompt
// Create 2 variable that will keep track the player score
// Make playRound function to make the game rules of rock paper scissor game
// Make playGame function to make the game length that is 5 round and make If statement that declares the winner

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

// function getHumanChoice() {
//   let input = prompt("Choose Wisely my man.. (Rock, Paper, Scissor)");
//   return input.toLowerCase();
// }

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Its a tie!!!, You both using ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      console.log(`You Win!!!!!, ${humanChoice} win against ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose!!, ${computerChoice} win against ${humanChoice} `);
      computerScore++;
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(
    `Your Final Score is: You:${humanScore}, Computer:${computerScore}`
  );

  if (humanScore > computerScore) {
    console.log("Congrats, You win!!");
  } else if (computerScore > humanScore) {
    console.log("You Are Cooked mate !!");
  } else {
    console.log("its a draw mate, Cheers");
  }
}

playGame();
