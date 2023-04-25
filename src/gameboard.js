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

  addShip(ship, x, y, direction){
      const shipPushed = [];
      if(!(x >= 0 && x < 10 && y >= 0 && y < 10)) return
      
      for(let i = 0; i < ship.length; i++){
          if(direction){
              shipPushed.push([x, y + i])
          }else{
              shipPushed.push([x + i, y]);
          }
      }
      
      for(let i = 0; i < shipPushed.length; i++){
          for(let j = 0; j < this.ships.length; j++){
              if (this.ships[j].positions.some(cell => cell[0] === shipPushed[i][0] && cell[1] === shipPushed[i][1])) {
              return;
              }
          }
      }
      this.ships.push({positions: shipPushed, ship: ship});
      return true;
  }
  
  receiveAttack(x, y){
      let shipIndex = null;
      for(let i = 0; i < this.ships.length; i++){
          if(this.ships[i].positions.some(cell => cell[0] === x && cell[1] === y)){
              shipIndex = this.ships[i]
          }
      }
      if(shipIndex){
          shipIndex.ship.hitRegister();
          this.board[x][y] = true;
          return;
      }
      this.board[x][y] = false;
      return;
  }
}