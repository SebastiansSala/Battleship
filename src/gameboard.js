class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

export class Gameboard {
  constructor() {
    this.board = this.buildBoard();
    this.ships = [];
  }

  buildBoard() {
    const board = [];
    for (let row = 0; row < 10; row++) {
      board[row] = [];
      for (let col = 0; col < 10; col++) {
        board[row][col] = new Node(row, col);
      }
    }
    return board;
  }

  addShip(ship) {
    if(ship.direction === 'horizontal'){
        if(ship.length + ship.col > 10){
            throw new Error('Max size limit');
        }
    }else{
        if(ship.length + ship.row > 10){
            throw new Error('Max size limit');
        }
    }

    for(let i = 0; i < this.ships.length; i++){
        for(let j = 0; j < this.ships[i].length ; j++){
            const currentShip = this.ships[i][j];
            if(ship.direction === 'horizontal'){
                if((ship.row + 1 === currentShip.row + 1 || ship.row - 1 === currentShip.row - 1) ||  (ship.col + 1 === currentShip.col + 1 || ship.col - 1 === currentShip.col - 1)){
                    throw new Error('Cant place a ship on another ship!');
                }
            }else{
                if((ship.row + 1 === currentShip.row + 1 || ship.row - 1 === currentShip.row - 1) ||  (ship.col + 1 === currentShip.col + 1 || ship.col - 1 === currentShip.col - 1)){
                    throw new Error('Cant place a ship on another ship!');
                }
            }
        }
    }
    this.ships.push(ship);
  }
}

export class Ship {
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

  hit(){
    return this.hits++;
  }
}
