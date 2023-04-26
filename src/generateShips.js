import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

export function generateShips() {
  const board = new Gameboard();
  const ships = [
    new Ship(2),
    new Ship(2),
    new Ship(3),
    new Ship(4),
    new Ship(5),
  ];

  for (const ship of ships) {
    let positionFound = false;

    while (!positionFound) {
      const [row, col] = generateRandomPosition(ship);
      const direction = Boolean(Math.round(Math.random()));
      positionFound = board.addShip(ship, row, col, direction);
    }
  }
  return board;
}

function generateRandomPosition(ship) {
  const row = Math.floor(Math.random() * 10);
  const col = Math.floor(Math.random() * 10);
  return [row, col];
}

export function generateIAShips() {
  const board = new Gameboard();
  const ships = [
    new Ship(2),
    new Ship(2),
    new Ship(3),
    new Ship(4),
    new Ship(5),
  ];

  for (const ship of ships) {
    let positionFound = false;

    while (!positionFound) {
      const [row, col] = generateRandomPosition(ship);
      const direction = Boolean(Math.round(Math.random()));
      positionFound = board.addShip(ship, row, col, direction);
    }
  }
  return board;
}
