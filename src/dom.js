export function loadBoard(){
    const grid1 = document.getElementById('grid');
    const grid2 = document.getElementById('grid2');
    for(let row = 0; row < 10; row++){
        for(let col = 0; col < 10; col++){
            const cell = document.createElement('div');
            const cell2 = document.createElement('div');
            cell.classList.add('bg-white');
            cell.classList.add('hover:bg-black');
            cell.classList.add('border');
            cell.classList.add('border-black');
            cell.classList.add('aspect-w-1');
            cell.classList.add('aspect-h-1');
            cell2.classList.add('bg-white');
            cell2.classList.add('hover:bg-black');
            cell2.classList.add('border');
            cell2.classList.add('border-black');
            cell2.classList.add('aspect-w-1');
            cell2.classList.add('aspect-h-1');
            grid1.appendChild(cell);
            grid2.appendChild(cell2);
        }
    }
}
