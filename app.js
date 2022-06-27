let txt = document.getElementById("myText");
let butn = document.getElementById("enter");
let out = document.getElementById("output1");
// Function to enter name and have it disappear. Will also move to an output under the reset block
function fun1() {
  out.innerHTML = txt.value + " 'X'";

  butn.style.display = "none";
  txt.style.display = "none";
}

butn.addEventListener("click", fun1);

let txt2 = document.getElementById("myText2");
let butn2 = document.getElementById("enter2");
let out2 = document.getElementById("output2");
//Function for player2 to enter name and have it dissapear. Will also move to an output under the reset block
function fun2() {
  out2.innerHTML = txt2.value + " 'O'";

  butn2.style.display = "none";
  txt2.style.display = "none";
}
butn2.addEventListener("click", fun2);

//Assign all of the boxes to one variable
let boxes = document.querySelectorAll(".box");
let restart = document.getElementsByClassName("reset");
let gameActive = true;
let gameOverText = document.getElementsByClassName("gameOverText");
// 2-dimensional Array of all the possible winning outcomes in the boxes
let winningWays = [
  [0, 4, 8],
  [2, 4, 6],
  [6, 7, 8],
  [2, 5, 8],
  [0, 3, 6],
  [0, 1, 2],
  [3, 4, 5],
  [1, 4, 7],
];
// Board with 9 empty spaces
let board = ["", "", "", "", "", "", "", "", ""];
//Keeps track of whose turn it is
let turn = "X";
let computer = "O"
//Function to start the game
startGame();

//For each cell I put an event listener of click and added a callback boxClick
function startGame() {
  boxes.forEach((box) => box.addEventListener("click", boxClick));
  gameActive = true;
}

// Get the attribute of the data cell index for each box clicked on
//Only want to update a cell if there is nothing there or the game is active
//invoke the updateBox function if the game is not active or the box clicked on is not empty
//Run the winning check function to check for a winner after a box is clicked.
function boxClick() {
  let boxIndex = this.getAttribute("data-cell-index");

  if (board[boxIndex] != "" || !gameActive) {
    return;
  }

  boxUpdate(this, boxIndex);

  winnerCheck();
}
//Updating the placeholders, Whichever turn it is will be put in the box
function boxUpdate(box, index) {
  board[index] = turn;
  box.textContent = turn;
}
//If the turn is equal to X I will reassign the turn to O, otherwise X. This is to get them switching back and forth
function switchPlayer() {
  turn = turn == "X" ? "O" : "X";
}
//Want to check if someone has won
//want to loop through the winningWays to see if someone has won
//If  there is an empty space I will continue
//Break out of the loop once the the index of a winningWay is full
//Run the message once someone has won or had a tie
//If none of it checks out then switch the player.
function winnerCheck() {
  let turnWon = false;

  for (let i = 0; i < winningWays.length; i++) {
    let status = winningWays[i];
    const cellB = board[status[1]];
    const cellA = board[status[0]];
    const cellC = board[status[2]];

    if (cellB === "" || cellA === "" || cellC === "") {
      continue;
    }

    if (cellA === cellB && cellB === cellC) {
      turnWon = true;
      break;
    }
  }

  if (turnWon) {
    gameOverText.innerText = `${turn} has won!`;
    gameActive = false;
  } else if (!board.includes("")) {
    gameOverText.innerText = "Tie!";
  } else {
    switchPlayer();
  }
}
//Return to the original empty board once the game is over and reset it.
function restartBoard() {
  turn = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach((box) => (box.textContent = ""));
  gameActive = true;
}
//add an event listener of click to run the restartBoard function when the reset button is clicked.
restart.addEventListener("click",restartBoard)

function computerMove () {
    if (board[boxIndex] != "" ) {
        
    }
}