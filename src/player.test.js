import { Player } from "./player";

describe('Player', () => {
    let mockGameboard;
  
    beforeEach(() => {
      mockGameboard = {
        receiveAttack: jest.fn(),
        ships: [
          {
            positions: [[0, 0], [0, 1], [0, 2]],
          },
          {
            positions: [[2, 3], [3, 3], [4, 3]],
          },
        ],
      };
    });
  
    it('should call gameboard.receiveAttack() with correct row and col', () => {
      const player = Player(mockGameboard);
      player.randomAttack();
      expect(mockGameboard.receiveAttack).toHaveBeenCalledTimes(1);
      expect(mockGameboard.receiveAttack).toHaveBeenCalledWith(
        expect.any(Number),
        expect.any(Number)
      );
    });
  
    it('should return an array with row, col, and isHit values', () => {
      const player = Player(mockGameboard);
      const attackResult = player.randomAttack();
      expect(attackResult).toHaveLength(3);
      expect(attackResult[0]).toBeGreaterThanOrEqual(0);
      expect(attackResult[0]).toBeLessThan(10);
      expect(attackResult[1]).toBeGreaterThanOrEqual(0);
      expect(attackResult[1]).toBeLessThan(10);
      expect(typeof attackResult[2]).toBe('boolean');
    });
  
  });