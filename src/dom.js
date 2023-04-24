import classnames from 'classnames';

export function loadBoard(){
    const grid1 = document.getElementById('grid');
    const grid2 = document.getElementById('grid2');
    for(let row = 0; row < 10; row++){
        for(let col = 0; col < 10; col++){
            const cell = document.createElement('div');
            const cell2 = document.createElement('div');
            cell.className = classnames('bg-white', 'hover:bg-black', 'border', 'border-black', 'aspect-w-1', 'aspect-h-1');
            cell2.className = classnames('bg-white', 'hover:bg-black', 'border', 'border-black', 'aspect-w-1', 'aspect-h-1', 'cursor-pointer', 'square');
            grid1.appendChild(cell);
            grid2.appendChild(cell2);
        }
    }
}


export function loadShoot() {
    const cell = document.querySelectorAll('.square');
    cell.forEach(elem => {
      elem.addEventListener('click', () => {
        elem.classList.remove('bg-white');
        elem.classList.add('bg-green-500');
      })
    })
  }
