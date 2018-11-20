
/*
var morpion = [
	['A', 'B', 'C'],
	['D', 'E', 'F'],
	['G', 'H', 'I']
];

_____________
|   |   |   |
| A | B | C |
|___|___|___|
|   |   |   |
| D | E | F |
|___|___|___|
|   |   |   |
| G | H | I |
|___|___|___|

console.log(morpion[0][0]);
// => A
console.log(morpion[1][2]);
// => F
console.log(morpion[2][2]);
// => I

// A
document.getElementById('morpion').children[0].children[0].innerHTML = 'A';
// F
document.getElementById('morpion').children[1].children[2].innerHTML = 'F';
// I
document.getElementById('morpion').children[2].children[2].innerHTML = 'I';
*/
var morpion = [[],[],[]];
var turn = 'X';
var win = false;
var a = 0;
// Ne rien modifier au dessus de ce commentaire

// Fonction qui permet de jouer
// Ne pas modifier cette fonction
function play(x, y) {
	if (!morpion[y][x] && win === false) {
		morpion[y][x] = turn;
		document.getElementById('morpion').children[y].children[x].innerHTML = turn;
		if (turn == 'X') {
			turn = 'O';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de O';
		}
		else {
			turn = 'X';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de X';
		}
		is_win(x, y);
	}
}


// Fonction qui permet de recommencer
function restart() {
	morpion = [[],[],[]];
	turn = 'X';
	win = false;
	// Ne rien modifier au dessus de ce commentaire
a = 0;
	// Ne rien modifier au dessous de ce commentaire
	for (var y = 0; y <= 2; y++) {
		for (var x = 0; x <= 2; x++) {
			document.getElementById('morpion').children[y].children[x].innerHTML = '';
		}
	}
	document.getElementById('infos').children[0].innerHTML = 'Au tour de X';
}


// Fonction de vérification de victoire
function is_win(x, y) {
	// Ne rien modifier au dessus de ce commentaire
	a += 1;
	console.log("x : " + x + " y :" + y);


	if (morpion[0][x] == morpion[1][x] && morpion[1][x]  == morpion[2][x])
	{
		win = morpion[y][x];
		
	}
	else if (morpion[y][0] == morpion[y][1] && morpion[y][1] == morpion[y][2])
	{
		win = morpion[y][x];

	}

	// only the fisrt diag work
	else if 
		(
			morpion[1][1] != undefined &&
			(
				(x == 0 && y == 0) ||
				(x == 1 && y == 1) ||
				(x == 2 && y == 2) ||
				(x == 0 && y == 2) ||
				(x == 2 && y == 0)
			)
		)
	{
		if (morpion[0][0] == morpion[1][1] && morpion[1][1] == morpion[2][2])
		{
			win = morpion[y][x];

		}
		else if(morpion[2][0] == morpion[1][1] && morpion[1][1] == morpion[0][2])
		{
			win = morpion[y][x];

		}
	}
	else if (a == 9)
	{
		win = 'null';
	}




	// Ne rien modifier au dessous de ce commentaire
	if (win == 'null') {
		document.getElementById('infos').children[0].innerHTML = 'Match nul';
	}
	else if (win !== false) {
		document.getElementById('infos').children[0].innerHTML = win + ' à gagné';
	}
}

