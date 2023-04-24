export const Ship = (ship_id) => {
  const ships = [
    {length: 0, hit: 0, sunk: false}
  ];

  const getShip = () => {
    const ship = ships.find(id => id === ship_id);
    return ship;  
}

  const hit = () => {
    const ship = getShip();
    ship.hit++;
  };

  const isSunk = () => {
    const ship = getShip();
    if(ship.length === ship.hit){
        ship.sunk = true;
        return true;
    }
    return false;
  }

  return { getHitState, ships, isSunk, hit };
};
