export const Player = (gameboard) => {
  const attacks = [];

  const randomAttack = () => {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    while (attacks.some((arr) => arr[0] === row && arr[1] === col)) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    }
    attacks.push([row, col]);
    gameboard.receiveAttack(row, col);
    const isHit = gameboard.ships.some((ship) =>
      ship.positions.some(
        (position) => position[0] === row && position[1] === col
      )
    );
    return [row, col, isHit];
  };

  return {
    randomAttack, attacks,
  };
};
