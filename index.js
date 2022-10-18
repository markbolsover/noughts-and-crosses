const boxes = document.querySelectorAll(".box");
let turn = "X";
let numberOfTurns = 0;
let playerX = [];
let player0 = [];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function reset() {
  for (let i = 0; i <= 8; i++) {
    const eachBox = document.getElementById(i);
    eachBox.innerText = "";
    turn = "X";
    numberOfTurns = 0;
    playerX = [];
    player0 = [];
  }
}

const clickBox = () => {
  const boxArr = [...boxes];
  boxArr.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.innerText === "" && turn === "X") {
        el.innerText = turn;
        turn = "0";
        let id = el.id;
        playerX.push(parseInt(id));
        playerX.sort();
        numberOfTurns += 1;
        console.log(numberOfTurns);
        if (playerX.length >= 3) {
          setTimeout(checkWinner, 1000);
        }
      } else if (el.innerText === "" && turn === "0") {
        el.innerText = turn;
        turn = "X";
        let id = el.id;
        player0.push(parseInt(id));
        player0.sort();
        numberOfTurns += 1;
        console.log(numberOfTurns);
        if (player0.length >= 3) {
          setTimeout(checkWinner, 1000);
        }
      }
    });
  });
};

clickBox();

const checkWinner = () => {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (JSON.stringify(winningCombinations[i]) === JSON.stringify(playerX)) {
      alert("X has won!");
      reset();
    } else if (
      JSON.stringify(winningCombinations[i]) === JSON.stringify(player0)
    ) {
      alert("0 has won!");
      reset();
    } else if (numberOfTurns === 9) {
      alert("Game Over!");
      reset();
    }
  }
};
