import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

describe("Gameboard", () => {
  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = new Gameboard();
    ship = new Ship(3);
  });

  describe("buildBoard", () => {
    test("returns a 10x10 board", () => {
      expect(gameboard.buildBoard()).toHaveLength(10);
      expect(gameboard.buildBoard()[0]).toHaveLength(10);
    });
  });

  describe("addShip", () => {
    test("adds a horizontal ship to the board", () => {
      expect(gameboard.addShip(ship, 2, 2, false)).toBe(true);
      expect(gameboard.board[2][2]).toEqual(null);
      expect(gameboard.board[2][3]).toEqual(null);
      expect(gameboard.board[2][4]).toEqual(null);
      expect(gameboard.ships).toHaveLength(1);
    });

    test("adds a vertical ship to the board", () => {
      expect(gameboard.addShip(ship, 4, 4, true)).toBe(true);
      expect(gameboard.board[4][4]).toEqual(null);
      expect(gameboard.board[5][4]).toEqual(null);
      expect(gameboard.board[6][4]).toEqual(null);
      expect(gameboard.ships).toHaveLength(1);
    });

    test("does not add a ship out of the board", () => {
      expect(gameboard.addShip(ship, 8, 8, true)).toBe(false);
      expect(gameboard.addShip(ship, 8, 8, false)).toBe(false);
      expect(gameboard.ships).toHaveLength(0);
    });

    test("does not add a ship that overlaps another ship", () => {
      gameboard.addShip(ship, 2, 2, false);
      expect(gameboard.addShip(new Ship(2), 2, 2, true)).toBe(false);
      expect(gameboard.addShip(new Ship(1), 2, 3, false)).toBe(true);
      expect(gameboard.ships).toHaveLength(2);
    });
  });

  describe("receiveAttack", () => {
    test("registers a missed attack on the board", () => {
      gameboard.receiveAttack(2, 2);
      expect(gameboard.board[2][2]).toBe(false);
    });

    test("registers a hit attack on the board", () => {
      gameboard.addShip(ship, 2, 2, false);
      gameboard.receiveAttack(2, 2);
      expect(gameboard.board[2][2]).toBe(true);
    });

    test("registers a hit attack on a ship", () => {
      gameboard.addShip(ship, 2, 2, false);
      gameboard.receiveAttack(2, 2);
      expect(gameboard.ships[0].ship.hits).toBe(1);
    });

    test("registers a sunk ship on the board", () => {
      gameboard.addShip(ship, 2, 2, false);
      gameboard.receiveAttack(2, 2);
      gameboard.receiveAttack(3, 2);
      gameboard.receiveAttack(4, 2);
      expect(gameboard.ships[0].ship.sunk).toBe(true);
      expect(gameboard.shipsSunked()).toBe(true);
    });
  });
});
