




// letiables
let Joueur = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

// Constantes
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Fonction appelée lorsqu'un joueur clique sur une case
function makeMove(row, col) {
  let cellIndex = row * 3 + col;
  if (gameState[cellIndex] === "" && gameActive) {
    gameState[cellIndex] = Joueur;
    document.getElementsByClassName("cell")[cellIndex].innerText = Joueur;
    checkResult();
    togglePlayer();
  }
}

// Fonction pour changer le joueur actuel
function togglePlayer() {
  Joueur = Joueur === "X" ? "O" : "X";
}

// Fonction pour vérifier le résultat du jeu
function checkResult() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    let condition = winningConditions[i];
    let a = gameState[condition[0]];
    let b = gameState[condition[1]];
    let c = gameState[condition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c && a === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
        gameActive = false;
        document.getElementById("board").classList.add("game-over");
        document.getElementById("board").classList.add("winner-" + Joueur);
        alert("Joueur " + Joueur + " a gagné !");
        return;
      }
    
      let roundDraw = !gameState.includes("");
      if (roundDraw) {
        gameActive = false;
        document.getElementById("board").classList.add("game-over");
        alert("Match nul !");
        return;
      }
    }
    
    // Fonction pour réinitialiser le plateau de jeu
    function resetBoard() {
      Joueur = "X";
      gameActive = true;
      gameState = ["", "", "", "", "", "", "", "", ""];
      document.getElementById("board").classList.remove("game-over");
      document.getElementById("board").classList.remove("winner-X");
      document.getElementById("board").classList.remove("winner-O");
      let cells = document.getElementsByClassName("cell");
      for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
      }
    }
