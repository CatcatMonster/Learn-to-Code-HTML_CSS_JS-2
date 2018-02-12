// prompts for user name, later used in congratulate alerts see edited alerts ${user} below
// this is outside of the function so that it is only called when the page is loaded/refreshed
var player1 = prompt("Please enter player 1's name");
var player2 = prompt("Please enter player 2's name");

function playGame() {
  // prompts the user for a choice and stores it as playerOneChoice variable
  var playerOneChoice = prompt("Player 1 please choose rock, paper, or scissors");
  var playerTwoChoice = prompt("Player 2 please choose rock, paper, or scissors");

  // evaluation of tie results
  if (playerOneChoice === playerTwoChoice) {
    window.alert(`Both picked ${playerOneChoice}, its a TIE game!`)
  }

  // evaluation of all possible outcomes when user picks 'rock' and computer doesn't pick 'rock'
  else if (playerOneChoice === "rock") {
    if (playerTwoChoice === "paper") {
      window.alert(`${playerTwoChoice} vs ${playerOneChoice}, ${player2} WINS!!!`)
    } else {
      window.alert(`${playerTwoChoice} vs ${playerOneChoice}, ${player1} WINS!!!`)
    }
  }

  // evaluation of all possible outcomes when user picks 'paper' and computer doesn't pick 'paper'
  else if (playerOneChoice === "paper") {
    if (playerTwoChoice === "scissors") {
      window.alert(`${playerTwoChoice} vs ${playerOneChoice}, ${player2} WINS!!!`)
    } else {
      window.alert(`${playerTwoChoice} vs ${playerOneChoice}, ${player1} WINS!!!`)
    }
  }

  // evaluation of all possible outcomes when user picks 'scissors' and computer doesn't pick 'scissors'
  else if (playerOneChoice === "scissors") {
    if (playerTwoChoice === "rock") {
      window.alert(`${playerTwoChoice} vs ${playerOneChoice}, Computer WINS!!!`)
    } else {
      window.alert(`${playerTwoChoice} vs ${playerOneChoice}, ${user} WINS!!!`)
    }
  }
}
