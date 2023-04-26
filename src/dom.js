import classnames from "classnames";
import { generateShips } from "./generateShips";
import { generateIAShips } from "./generateShips";

let isPlayerTurn = true;
const enemie = generateIAShips();
const ally = generateShips();

export function loadBoard() {
  const grid1 = document.getElementById("grid");
  const grid2 = document.getElementById("grid2");
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("div");
      const cell2 = document.createElement("div");
      cell.className = classnames(
        "bg-white",
        "border",
        "hover:bg-yellow-200",
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
        "hover:bg-yellow-200",
        "border",
        "border-black",
        "aspect-w-1",
        "aspect-h-1",
        "cursor-pointer",
        "square"
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
      cell.classList.add("bg-black");
    }
  }
}

export function loadShot() {
  const cell = document.querySelectorAll(".square");
  cell.forEach((elem) => {
    elem.addEventListener("click", () => {
      if(!isPlayerTurn) return;
      shoot(enemie, elem);
      console.log(enemie.shipsSunked());
    });
  });
  const cell2 = document.querySelectorAll(".square2");
  cell2.forEach((elem) => {
    elem.addEventListener("click", () => {
      if(isPlayerTurn) return;
      shoot(ally, elem);
      console.log(ally.shipsSunked());
    });
  });
}

function shoot(player, cell) {
  if (cell.classList.contains("selected")) return;
  const row = parseInt(cell.getAttribute("data-row"));
  const col = parseInt(cell.getAttribute("data-col"));
  player.receiveAttack(row, col);
  cell.classList.add("selected");
  cell.removeEventListener("click", shoot);
  isPlayerTurn = !isPlayerTurn;
  if(player.shipsSunked()) console.log(`Ha ganado ${player}`);
}
