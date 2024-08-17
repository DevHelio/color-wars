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

const b = document.getElementById('board');

