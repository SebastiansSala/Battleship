export const Player = (gameboard) => {
  const attacks = [];

  const randomAttack = () => {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    let pos = `${row}-${col}`;
    while (attacks.includes(pos)) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
      pos = `${row}-${col}`;
    }
    attacks.push(pos);
    gameboard.receiveAttack(row, col);
    return [row, col];
  };

  return {
    randomAttack,
  };
};
