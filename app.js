let txt = document.getElementById("myText");
let butn = document.getElementById("enter");
let out = document.getElementById("output1");

function fun1() {
    out.innerHTML = txt.value
}

butn.addEventListener("click",fun1)

let gameStatus = true;

const gameDisplay = document.querySelector(".game-over-text")

let currentPlayer = "X"

const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

function boardClick (boxEvent) {
    let boxClick = boxEvent.target

let clickedCellIndex = parseInt(boxClick.getAttribute("date-cell-index"));

if (gameState[boardClick] !== "" || !gameStatus) {
    return;
}
}