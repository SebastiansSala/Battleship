import classnames from "classnames";
import { generateShips } from "./generateShips";
import { Player } from "./player";

let isPlayerTurn = true;
let enemie = generateShips();
let ally = generateShips();
let IAPlayer = new Player(ally);

const renderPage = (() => {
  function loadBoard() {
    const grid1 = document.getElementById("grid");
    const grid2 = document.getElementById("grid2");
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        const cell2 = document.createElement("div");
        cell.className = classnames(
          "bg-white",
          "border",
          "border-black",
          "aspect-w-1",
          "aspect-h-1",
          "cursor-pointer",
          "square2"
        );
        cell.setAttribute("data-row", row);
        cell.setAttribute("data-col", col);
        cell2.className = classnames(
          "bg-white",
          "border",
          "border-black",
          "aspect-w-1",
          "aspect-h-1",
          "cursor-pointer",
          "square",
          "hover:bg-yellow-100"
        );
        cell2.setAttribute("data-row", row);
        cell2.setAttribute("data-col", col);
        grid1.appendChild(cell);
        grid2.appendChild(cell2);
      }
    }

    for (let ship of enemie.ships) {
      for (let position of ship.positions) {
        const row = position[0];
        const col = position[1];
        const cell = grid2.querySelector(
          `[data-row="${row}"][data-col="${col}"]`
        );
        cell.classList.remove("bg-white");
        cell.classList.add("bg-red-700");
      }
    }

    for (let ship of ally.ships) {
      for (let position of ship.positions) {
        const row = position[0];
        const col = position[1];
        const cell = grid1.querySelector(
          `[data-row="${row}"][data-col="${col}"]`
        );
        cell.classList.remove("bg-white");
        cell.classList.add("bg-gray-400");
      }
    }
  }

  function loadShot() {
    const cell = document.querySelectorAll(".square");
    cell.forEach((elem) => {
      elem.addEventListener("click", onCellClick);
    });
  }

  function onCellClick() {
    const cell = event.target;
    if (!isPlayerTurn || cell.classList.contains("selected") || cell.classList.contains("missedShot")) return;
    shoot(enemie, cell);
    if (enemie.shipsSunked()) {
      window.alert("Ha ganado el JUGADOR");
      resetBoard();
      return;
    }
    setTimeout(() => {
      renderIAShoot(IAPlayer);
      if (ally.shipsSunked()) {
        window.alert("Ha ganado la IA");
        resetBoard();
        return;
      }
    }, 100);
  }

  function shoot(player, cell) {
    const row = parseInt(cell.getAttribute("data-row"));
    const col = parseInt(cell.getAttribute("data-col"));
    const isHit = player.ships.some((ship) =>
      ship.positions.some(
        (position) => position[0] === row && position[1] === col
      )
    );
    if (isHit) {
      cell.classList.add("selected");
    } else {
      cell.classList.add("missedShot");
    }
    player.receiveAttack(row, col);
    isPlayerTurn = !isPlayerTurn;
  }

  function renderIAShoot(player) {
    const [row, col, isHit] = player.randomAttack();
    const cell = grid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    console.log(player);
    if (isHit) {
      cell.classList.add("selected");
    } else {
      cell.classList.add("missedShot");
    }
    cell.removeEventListener("click", onCellClick);
    isPlayerTurn = !isPlayerTurn;
  }

  function resetBoard() {
    ally = generateShips();
    enemie = generateShips();
    IAPlayer = new Player(enemie);
    const grid = document.getElementById("grid");
    const grid2 = document.getElementById("grid2");
    grid.innerHTML = "";
    grid2.innerHTML = "";
    isPlayerTurn = true;
    const cells = document.querySelectorAll(".selected");
    cells.forEach((cell) => cell.classList.remove("selected"));
    const missedShotCells = document.querySelectorAll(".missedShot");
    missedShotCells.forEach((cell) => cell.classList.remove("missedShot"));
    loadBoard();
    loadShot();
  }

  return { loadBoard, loadShot };
})();

export default renderPage;
