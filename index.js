const boxes = document.querySelectorAll(".box");

let currentPlayer = "X";
let board = Array(9).fill("");

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

boxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "" || checkWinner()) return;

    box.textContent = currentPlayer;
    board[i] = currentPlayer;

    if (checkWinner()) {
      setTimeout(() => alert(`${currentPlayer} wins`), 100);
      return;
    }

    if (!board.includes("")) {
      setTimeout(() => alert("It's a draw"), 100);
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

function checkWinner() {
  return winPatterns.some(([a, b, c]) => {
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}
