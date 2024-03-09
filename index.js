const boardEl = document.getElementById("board");
const startBtn = document.getElementById("startButton");

const rows = 10;
const col = 10;
const board = [];

for (let i = 0; i < 10; i++) {
  const row = [];
  for (let j = 0; j < 10; j++) {
    row.push(" ");
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.row = i;
    cell.dataset.col = j;
    boardEl.appendChild(cell);
  }

  board.push(row);
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (board[i][j] === null) {
      cell.className.add("ship");
    }
  }
}

function placeShips(board) {
  const shipLength = [5, 4, 3, 2, 1];

  for (let length of shipLength) {
    let ship;
    do {
      ship = new Array(length).fill(null);
    } while (!placeShip(board, ship));
  }
}

function placeShip(board, ship) {
  const horizontal = Math.random() < 0.5;
  let row, col;

  if (horizontal) {
    row = Math.floor(Math.random() * 10);
    col = Math.floor(Math.random() * (10 - ship.length + 1));
  } else {
    row = Math.floor(Math.random() * (10 - ship.length + 1));
    col = Math.floor(Math.random() * 10);
  }

  for (let i = 0; i < ship.length; i++) {
    if (horizontal) {
      if (board[row][col + i] !== " ") {
        return false;
      }
    } else {
      if (board[row + i][col] !== " ") {
        return false;
      }
    }
  }

  for (let i = 0; i < ship.length; i++) {
    if (horizontal) {
      board[row][col + i] = ship;
    } else {
      board[row + i][col] = ship;
    }
  }

  return true;
}

startBtn.addEventListener("click", function () {
  placeShips(board);
});
