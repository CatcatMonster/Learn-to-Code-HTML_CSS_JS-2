// prompts for user name, later used in congratulate alerts see edited alerts ${user} below
// this is outside of the function so that it is only called when the page is loaded/refreshed
var user = prompt("Please enter your name");

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
    // see what the tracking function does at the bottom of the page
    tracking(computerChoice, userChoice, "TIE");
    window.alert(`Both picked ${userChoice}, its a TIE game!`)
  }

  // evaluation of all possible outcomes when user picks 'rock' and computer doesn't pick 'rock'
  else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      tracking(computerChoice, userChoice, "Computer");
      window.alert(`${computerChoice} vs ${userChoice}, Computer WINS!!!`)
    } else {
      tracking(computerChoice, userChoice, user);
      window.alert(`${computerChoice} vs ${userChoice}, ${user} WINS!!!`)
    }
  }

  // evaluation of all possible outcomes when user picks 'paper' and computer doesn't pick 'paper'
  else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      tracking(computerChoice, userChoice, "Computer");
      window.alert(`${computerChoice} vs ${userChoice}, Computer WINS!!!`)
    } else {
      tracking(computerChoice, userChoice, user);
      window.alert(`${computerChoice} vs ${userChoice}, ${user} WINS!!!`)
    }
  }

  // evaluation of all possible outcomes when user picks 'scissors' and computer doesn't pick 'scissors'
  else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      tracking(computerChoice, userChoice, "Computer");
      window.alert(`${computerChoice} vs ${userChoice}, Computer WINS!!!`)
    } else {
      tracking(computerChoice, userChoice, user);
      window.alert(`${computerChoice} vs ${userChoice}, ${user} WINS!!!`)
    }
  }
}

// this function updates the table with a new row of the results of a match
// 3 arguments are being passed to it
function tracking(computerChoice, userChoice, winner) {

  // finds the table with an id of 'track'
  var table = document.getElementById("track");

  // tr = table row
  // creates a table row element
  var tr = document.createElement("tr");

  // td = table data (tells the table that this is a cell of data)
  // creates a table data element for the Computer column of the table
  var tdComputer = document.createElement("td");

  // creates a table data element for the User column of the table
  var tdUser = document.createElement("td");

  // creates a table data element for the Winner column of the table
  var tdWinner = document.createElement("td");

  // creates the text that will appear in the cell that was created with td for the Computer column
  var txtComputer = document.createTextNode(computerChoice);

  // creates the text that will appear in the cell that was created with td for the User column
  var txtUser = document.createTextNode(userChoice);

  // creates the text that will appear in the cell that was created with td for the Winner column
  var txtWinner = document.createTextNode(winner);

  // once the td element and text have both been created then they can be combined
  // combines the Computer text (the Computer's choice) to the table data (td) for the Computer column
  tdComputer.appendChild(txtComputer);

  // combines the User text (the User's choice) to the table data (td) for the User column
  tdUser.appendChild(txtUser);

  // combines the Winner text (the winner of that match) to the table data (td) for the Winner column
  tdWinner.appendChild(txtWinner);

  // once the table data (td) and text are combined then it can be added to the table row (tr)
  // adds the Computer cell to the table row (tr)
  tr.appendChild(tdComputer);

  // adds the User cell to the table row (tr)
  tr.appendChild(tdUser);

  // adds the Winner cell to the table row (tr)
  tr.appendChild(tdWinner);

  // once the table row (tr) is completely build then it is added to the table, see above where we created a variable called table and pointed it to the table on the html page
  table.appendChild(tr);
}

// for more information on JavaScript and tables please use the resources on the README.md
