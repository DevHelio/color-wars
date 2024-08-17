// Color wars implementation
// By; Helio (dev)

// Simple rules the game has to follow:
// . The game is supposed to be turn based, up to 4 players can play.
// . Square grid, 7x7.
// . The game should give an instant win to the player who glitches the game.
// .
// . Player should be able to set extra rules like: no instant killing, etc.

//setting up body
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.borderSizing = 'border-box';
document.body.style.backgroundColor = 'black';
document.body.style.display = 'flex';

//setting up board
const b = document.getElementById('board');
let boardSize = 7;
b.style.margin = '0';
b.style.padding = '0';
b.style.borderSizing = 'border-box';
b.style.display = 'flex';
b.style.flexDirection = 'column';
b.style.justifyContent = 'center';
b.style.alignItems = 'center';
b.style.flex = '1';
b.style.aspectRatio = '1/1';

for (let i=0; i<boardSize; i++) {
	let row = document.createElement('div');
	b.appendChild(row);
	row.classList.add(`row-${i}`);
	row.style.margin = '0';
	row.style.padding = '0';
	row.style.borderSizing = 'border-box';
	row.style.display = 'flex';
	row.style.flexDirection = 'row';
	row.style.justifyContent = 'center';
	row.style.alignItems = 'center';
	row.style.flex = '1';


	for (let j=0; j<boardSize; j++)  {
		let cell = document.createElement('button');
		row.appendChild(cell);
		cell.classList.add(`cell-${i}-${j}`);
		cell.innerHTML = '&nbsp;';
	}
}

