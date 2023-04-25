class Ship{

  constructor(length){
    this.length = length;
    this.hits = 0;
    this.sunk = this.isSunk();
  }

  hitRegister(){
      return this.hits++;
  }

  isSunk(){
      return this.hits === this.length ? true : false;
  }
}