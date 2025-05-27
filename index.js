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

console.log(getComputerChoice(`Computer Choice is ${getComputerChoice}`));

let input = window.prompt("Tentukan Pilihanmu !");

function getHumanChoice() {
  if (input === "rock") {
    return "rock";
  } else if (input === "paper") {
    return "paper";
  } else if (input === "scissor") {
    return "scissor";
  }
}

console.log(getHumanChoice(`Your Choice is ${input}`));
