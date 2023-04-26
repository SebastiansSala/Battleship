import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

describe('addShip', () => {
  let board;

  beforeEach(() => {
    board = new Gameboard();
  });

  test('should add a ship to the board if there are no overlapping ships', () => {
    const ship1 = new Ship(3);
    const added1 = board.addShip(ship1, 0, 0, true);
    expect(added1).toBe(true);
    expect(board.ships.length).toBe(1);
    
    const ship2 = new Ship(2);
    const added2 = board.addShip(ship2, 0, 2, false);
    expect(added2).toBe(false);
    expect(board.ships.length).toBe(1);
  });

  test('should not add a ship to the board if there are overlapping ships', () => {
    const ship1 = new Ship(3);
    board.addShip(ship1, 0, 0, true);

    const ship2 = new Ship(2);
    const added2 = board.addShip(ship2, 0, 1, true);
    expect(added2).toBe(false);
    expect(board.ships.length).toBe(1);

    const ship3 = new Ship(4);
    const added3 = board.addShip(ship3, 1, 0, false);
    expect(added3).toBe(true);
    expect(board.ships.length).toBe(2);
  });

  test('should not add a ship to the board if it goes out of bounds', () => {
    const ship1 = new Ship(3);
    const added1 = board.addShip(ship1, 8, 8, true);
    expect(added1).toBe(false);
    expect(board.ships.length).toBe(0);

    const ship2 = new Ship(2);
    const added2 = board.addShip(ship2, 9, 9, false);
    expect(added2).toBe(false);
    expect(board.ships.length).toBe(0);
  });
});
