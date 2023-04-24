class Gameboard {
    constructor() {
      this.board = this.buildBoard();
      this.ships = [];
    }
  
    buildBoard() {
      const board = [];
      for (let row = 0; row < 10; row++) {
        board[row] = [];
        for (let col = 0; col < 10; col++) {
          board[row][col] = null;
        }
      }
      return board;
    }
  
    addShip(ship) {
      const { row, col, length, direction } = ship;
  
      // Verificar que el barco cabe en el tablero
      if (direction === "horizontal") {
        if (col + length > 10) {
          throw new Error("Barco demasiado largo para el tablero");
        }
      } else {
        if (row + length > 10) {
          throw new Error("Barco demasiado largo para el tablero");
        }
      }
  
      // Verificar que el barco no se superponga con otro barco
      for (let existingShip of this.ships) {
        if (existingShip.direction === direction) {
          if (existingShip.row === row) {
            // Verificar si hay superposición en la columna
            for (let i = col; i < col + length; i++) {
              if (existingShip.col <= i && i <= existingShip.col + existingShip.length - 1) {
                throw new Error("No se puede colocar un barco sobre otro barco");
              }
            }
          } else if (existingShip.col === col) {
            // Verificar si hay superposición en la fila
            for (let i = row; i < row + length; i++) {
              if (existingShip.row <= i && i <= existingShip.row + existingShip.length - 1) {
                throw new Error("No se puede colocar un barco sobre otro barco");
              }
            }
          }
        } else {
          if (existingShip.direction === "horizontal") {
            // Verificar si el nuevo barco está adyacente a un barco existente en la fila
            if (existingShip.row === row && existingShip.col <= col + length - 1 && col <= existingShip.col + existingShip.length - 1) {
              throw new Error("No se puede colocar un barco adyacente a otro barco");
            }
          } else {
            // Verificar si el nuevo barco está adyacente a un barco existente en la columna
            if (existingShip.col === col && existingShip.row <= row + length - 1 && row <= existingShip.row + existingShip.length - 1) {
              throw new Error("No se puede colocar un barco adyacente a otro barco");
            }
          }
        }
      }
  
      // Si llegamos hasta aquí, entonces podemos agregar el barco al tablero
      this.ships.push(ship);
    }
  }
  
  class Ship {
    constructor(row, col, length, direction) {
      this.row = row;
      this.col = col;
      this.length = length;
      this.direction = direction;
      this.hits = 0;
      this.sunk = this.isSunk();
    }
    isSunk() {
      return this.hits === this.length ? true : false;
    }
  
    registerHit(){
      return this.hits++;
    }
  }

class Ship {
  constructor(row, col, length, direction) {
    this.row = row;
    this.col = col;
    this.length = length;
    this.direction = direction;
    this.hits = 0;
    this.sunk = this.isSunk();
  }
  isSunk() {
    return this.hits === this.length ? true : false;
  }

  registerHit() {
    return this.hits++;
  }
}
