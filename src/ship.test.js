import { Ship } from "./ship";

describe('Ship', () => {
    let myShip;
  
    beforeEach(() => {
      myShip = new Ship(3);
    });
  
    it('should have the correct length, hits, and sunk status', () => {
      expect(myShip.length).toBe(3);
      expect(myShip.hits).toBe(0);
      expect(myShip.sunk).toBe(false);
    });
  
    it('should register a hit and update the hits counter', () => {
      myShip.hitRegister();
      expect(myShip.hits).toBe(1);
    });
  
    it('should return true if the ship is sunk and false otherwise', () => {
      expect(myShip.isSunk()).toBe(false);
  
      myShip.hitRegister();
      expect(myShip.isSunk()).toBe(false);
  
      myShip.hitRegister();
      expect(myShip.isSunk()).toBe(false);
  
      myShip.hitRegister();
      expect(myShip.isSunk()).toBe(true);
    });
  });