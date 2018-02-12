
function playGame() {
  // prompts the user for a choice and stores it as userChoice variable
  var userChoice = prompt("Please choose rock, paper, or scissors");

  // created a random number between 0-1 and stores it as computerChoice variable
  var computerChoice = Math.random();

  // re-assigns the computerChoice variable to a string of "rock / paper/ scissors" based on random value
  if (computerChoice <= 0.33) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors"
  }

  // evaluation of tie results
  if (userChoice === computerChoice) {
    window.alert(`Both picked ${userChoice}, its a TIE game!`)
  }

  // evaluation of all possible outcomes when user picks 'rock' and computer doesn't pick 'rock'
  else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      window.alert(`${computerChoice} vs ${userChoice}, Computer WINS!!!`)
    } else {
      window.alert(`${computerChoice} vs ${userChoice}, User WINS!!!`)
    }
  }

  // evaluation of all possible outcomes when user picks 'paper' and computer doesn't pick 'paper'
  else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      window.alert(`${computerChoice} vs ${userChoice}, Computer WINS!!!`)
    } else {
      window.alert(`${computerChoice} vs ${userChoice}, User WINS!!!`)
    }
  }

  // evaluation of all possible outcomes when user picks 'scissors' and computer doesn't pick 'scissors'
  else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      window.alert(`${computerChoice} vs ${userChoice}, Computer WINS!!!`)
    } else {
      window.alert(`${computerChoice} vs ${userChoice}, User WINS!!!`)
    }
  }
}
