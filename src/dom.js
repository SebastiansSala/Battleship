export function loadBoard(){
    const content = document.getElementById('grid');
    for(let row = 0; row < 8; row++){
        for(let col = 0; col < 8; col++){
            const cell = document.createElement('div');
            cell.classList.add('bg-white');
            cell.classList.add('hover:bg-black');
            content.appendChild(cell);
        }
    }
}