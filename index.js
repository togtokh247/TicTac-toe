const boxes = document.querySelectorAll(".header .box");
const startBtn = document.querySelector("#start-btn");

let currentPlayer = "X";
let board = Array(9).fill("");
let gameOver = false;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  return winPatterns.some(([a, b, c]) => {
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  currentPlayer = "X";
  board = Array(9).fill("");
  gameOver = false;

  boxes.forEach((box) => {
    box.textContent = "";
  });
}

boxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    if (gameOver) return;
    if (box.textContent !== "") return;

    box.textContent = currentPlayer;
    board[i] = currentPlayer;

    if (checkWinner()) {
      gameOver = true;
      setTimeout(() => alert(`${currentPlayer} wins`), 100);
      return;
    }

    if (!board.includes("")) {
      gameOver = true;
      setTimeout(() => alert("It's a draw"), 100);
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

startBtn.addEventListener("click", resetGame);

resetGame();
