﻿var APOSTAS = [
	{ nome: 'Adriana', placares: [[2, 1], [2, 0], [2, 0], [0, 0], [1, 3], [1, 1], [2, 0], [2, 1], [3, 1], [0, 1], [0, 4], [1, 1], [2, 1], [2, 2], [2, 0], [0, 2], [0, 4], [1, 1], [3, 0], [1, 1], [2, 0], [2, 0], [2, 2], [1, 1], [2, 1], [2, 1], [1, 1], [2, 2], [3, 0], [2, 3], [2, 1], [0, 0], [3, 0], [2, 1], [0, 5], [2, 2], [2, 2], [3, 1], [4, 0], [2, 3], [1, 2], [4, 1], [2, 2], [2, 2], [1, 2], [1, 3], [0, 4], [0, 1]] },
	{ nome: 'Adrisson', placares: [[3, 0], [2, 0], [2, 0], [0, 1], [0, 3], [0, 1], [1, 1], [2, 0], [2, 0], [0, 3], [0, 3], [1, 0], [3, 0], [0, 1], [2, 1], [3, 0], [1, 0], [0, 2], [2, 0], [1, 2], [1, 1], [3, 0], [1, 0], [0, 2], [1, 1], [3, 0], [0, 1], [0, 2], [0, 2], [1, 1], [2, 0], [0, 2], [4, 0], [1, 1], [0, 2], [2, 0], [1, 0], [0, 1], [3, 0], [1, 2], [0, 2], [2, 0], [2, 0], [2, 0], [1, 0], [1, 0], [0, 2], [0, 2]] },
	{ nome: 'Alex', placares: [[1, 0], [2, 1], [2, 1], [1, 1], [0, 1], [2, 2], [0, 0], [3, 1], [2, 1], [0, 2], [0, 1], [2, 0], [2, 1], [1, 1], [2, 1], [1, 0], [1, 1], [0, 3], [2, 0], [1, 1], [0, 1], [2, 0], [2, 1], [0, 3], [2, 0], [2, 0], [1, 1], [2, 2], [1, 3], [0, 2], [3, 0], [1, 3], [3, 0], [2, 1], [1, 1], [2, 0], [1, 0], [1, 0], [2, 0], [1, 2], [0, 1], [1, 1], [1, 0], [1, 2], [1, 1], [2, 1], [1, 0], [0, 1]] },
	{ nome: 'André', placares: [[2, 0], [1, 0], [2, 0], [0, 1], [0, 2], [1, 1], [1, 0], [1, 0], [1, 0], [0, 2], [0, 2], [1, 1], [1, 0], [1, 1], [1, 0], [1, 1], [0, 1], [1, 1], [1, 0], [1, 1], [1, 1], [1, 0], [1, 1], [0, 2], [1, 1], [1, 0], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [2, 0], [1, 1], [0, 2], [1, 0], [1, 1], [1, 1], [3, 0], [0, 1], [0, 2], [2, 0], [1, 0], [1, 0], [1, 0], [1, 0], [0, 1], [0, 1]] },
	{ nome: 'Brenda', placares: [[3, 2], [2, 0], [3, 1], [2, 2], [2, 4], [1, 1], [3, 2], [4, 1], [2, 1], [1, 3], [1, 4], [2, 1], [2, 1], [1, 1], [3, 1], [2, 2], [1, 4], [1, 1], [4, 0], [2, 3], [3, 3], [3, 2], [3, 2], [0, 4], [3, 0], [4, 1], [1, 2], [1, 1], [1, 1], [1, 1], [3, 0], [1, 1], [4, 0], [0, 0], [0, 0], [1, 0], [2, 3], [0, 3], [3, 0], [2, 1], [2, 2], [3, 0], [1, 1], [2, 1], [1, 1], [1, 0], [0, 1], [1, 1]] },
	{ nome: 'Daniele', placares: [[4, 1], [2, 1], [2, 1], [1, 1], [0, 2], [0, 1], [2, 1], [2, 1], [3, 2], [0, 1], [0, 2], [1, 0], [0, 1], [0, 0], [0, 2], [0, 1], [0, 1], [1, 0], [2, 0], [1, 2], [2, 3], [1, 0], [3, 2], [0, 0], [1, 0], [2, 0], [2, 2], [1, 1], [0, 0], [0, 1], [1, 0], [1, 0], [0, 0], [0, 0], [1, 0], [0, 0], [3, 2], [0, 1], [2, 0], [1, 2], [1, 2], [1, 0], [0, 0], [1, 0], [1, 1], [0, 0], [0, 0], [1, 0]] },
	{ nome: 'Danilo', placares: [[2, 1], [1, 1], [2, 1], [2, 0], [1, 2], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 3], [2, 1], [2, 0], [1, 1], [3, 2], [1, 1], [1, 2], [1, 2], [2, 1], [0, 1], [0, 2], [3, 0], [2, 0], [0, 2], [2, 0], [2, 0], [0, 1], [0, 1], [0, 1], [1, 2], [3, 0], [0, 1], [2, 0], [1, 0], [1, 2], [1, 0], [1, 1], [0, 1], [1, 0], [0, 1], [1, 2], [2, 0], [3, 0], [2, 0], [1, 0], [0, 1], [1, 2], [1, 1]] },
	{ nome: 'Darin', placares: [[3, 0], [1, 0], [3, 1], [1, 1], [0, 2], [1, 0], [2, 1], [2, 1], [2, 0], [1, 2], [0, 2], [1, 0], [1, 0], [1, 2], [1, 0], [1, 1], [0, 1], [1, 0], [2, 0], [1, 2], [2, 1], [2, 0], [1, 0], [0, 2], [1, 0], [2, 0], [0, 1], [1, 2], [1, 1], [0, 1], [2, 0], [0, 1], [3, 1], [1, 2], [0, 2], [1, 0], [1, 0], [0, 1], [2, 0], [1, 1], [1, 2], [1, 0], [2, 1], [2, 0], [2, 1], [1, 1], [0, 2], [0, 1]] },
	{ nome: 'Douglas', placares: [[3, 0], [2, 1], [2, 0], [2, 0], [0, 3], [0, 3], [2, 1], [3, 0], [2, 1], [0, 2], [0, 3], [2, 1], [2, 0], [2, 2], [1, 2], [2, 0], [1, 0], [0, 2], [2, 1], [0, 0], [0, 2], [2, 0], [1, 0], [0, 3], [0, 2], [3, 0], [3, 1], [2, 0], [1, 1], [0, 2], [3, 0], [0, 2], [2, 0], [2, 0], [1, 2], [0, 1], [1, 1], [1, 2], [2, 0], [1, 3], [1, 2], [3, 0], [2, 0], [0, 2], [1, 1], [2, 1], [1, 0], [1, 0]] },
	{ nome: 'Fábio', placares: [[1, 0], [1, 2], [2, 0], [1, 2], [0, 2], [1, 0], [2, 1], [3, 0], [2, 1], [0, 3], [0, 4], [2, 1], [2, 1], [1, 2], [2, 0], [1, 0], [1, 1], [2, 1], [2, 0], [1, 2], [0, 0], [3, 0], [2, 1], [0, 2], [1, 0], [4, 0], [1, 1], [0, 2], [0, 2], [1, 2], [4, 0], [0, 1], [3, 0], [2, 0], [0, 2], [1, 1], [2, 1], [1, 1], [2, 0], [1, 2], [1, 2], [2, 1], [2, 0], [2, 0], [1, 1], [2, 1], [1, 2], [0, 2]] },
	{ nome: 'Fernando Bassani', placares: [[2, 0], [2, 1], [2, 0], [0, 1], [1, 3], [1, 1], [2, 1], [1, 0], [3, 0], [0, 2], [0, 3], [1, 0], [2, 1], [1, 2], [2, 0], [0, 2], [1, 3], [1, 1], [3, 0], [2, 1], [0, 1], [2, 0], [1, 2], [0, 2], [2, 1], [2, 0], [0, 1], [2, 1], [2, 1], [0, 2], [3, 0], [0, 1], [3, 0], [2, 1], [0, 4], [0, 1], [2, 1], [3, 2], [4, 0], [1, 3], [1, 2], [3, 1], [2, 1], [2, 2], [1, 2], [1, 3], [0, 3], [0, 1]] },
	{ nome: 'Fernando Vidal', placares: [[2, 0], [1, 0], [2, 1], [1, 1], [0, 2], [0, 1], [1, 1], [1, 0], [2, 1], [0, 1], [0, 2], [1, 1], [2, 0], [1, 1], [1, 1], [2, 1], [1, 2], [0, 1], [1, 0], [0, 1], [1, 1], [2, 0], [1, 1], [0, 2], [1, 1], [2, 0], [1, 1], [0, 2], [0, 1], [1, 2], [2, 0], [1, 1], [2, 0], [2, 1], [1, 3], [1, 1], [2, 2], [0, 1], [2, 0], [2, 2], [1, 2], [1, 0], [2, 1], [1, 0], [1, 1], [1, 1], [0, 1], [0, 1]] },
	{ nome: 'Geciane', placares: [[2, 1], [1, 1], [2, 0], [1, 1], [1, 2], [3, 1], [1, 0], [3, 1], [3, 2], [1, 2], [0, 3], [1, 1], [2, 0], [0, 1], [2, 2], [1, 0], [2, 2], [0, 3], [4, 1], [2, 2], [1, 0], [3, 0], [2, 2], [0, 3], [0, 2], [3, 0], [1, 2], [1, 3], [2, 2], [0, 2], [4, 0], [1, 3], [3, 0], [2, 0], [2, 3], [0, 2], [2, 1], [1, 1], [3, 0], [1, 3], [0, 2], [2, 0], [4, 0], [1, 1], [2, 0], [1, 2], [0, 2], [1, 2]] },
	{ nome: 'Greice', placares: [[2, 1], [1, 2], [2, 0], [3, 1], [1, 0], [1, 2], [2, 0], [1, 1], [3, 1], [1, 2], [1, 3], [2, 0], [2, 0], [0, 3], [3, 0], [2, 1], [2, 3], [2, 0], [2, 0], [3, 2], [0, 2], [3, 0], [2, 1], [0, 3], [2, 1], [3, 0], [2, 2], [1, 3], [1, 2], [1, 3], [3, 0], [0, 2], [2, 0], [3, 1], [1, 2], [1, 1], [2, 1], [0, 2], [3, 0], [2, 3], [1, 2], [3, 0], [2, 1], [1, 0], [1, 1], [2, 1], [1, 3], [1, 2]] },
	{ nome: 'Guilherme F.', placares: [[2, 1], [1, 2], [2, 2], [1, 1], [0, 2], [0, 1], [2, 0], [1, 0], [1, 0], [0, 2], [1, 0], [1, 0], [1, 1], [1, 2], [0, 0], [1, 0], [2, 0], [0, 1], [1, 0], [1, 1], [1, 2], [2, 0], [3, 2], [1, 3], [1, 1], [2, 0], [0, 1], [3, 2], [0, 2], [1, 0], [2, 0], [1, 1], [2, 1], [0, 0], [1, 3], [0, 1], [1, 1], [1, 2], [2, 0], [1, 2], [0, 2], [2, 1], [1, 0], [1, 0], [2, 3], [0, 1], [1, 0], [0, 2]] },
	{ nome: 'Guilherme W.', placares: [[3, 1], [3, 1], [2, 1], [1, 1], [1, 4], [1, 1], [3, 1], [2, 2], [3, 2], [2, 2], [1, 3], [3, 1], [2, 2], [1, 2], [1, 2], [2, 2], [2, 0], [1, 2], [4, 1], [2, 2], [2, 3], [2, 0], [1, 3], [1, 3], [2, 1], [3, 1], [2, 2], [1, 2], [1, 2], [1, 3], [4, 0], [1, 3], [3, 0], [2, 0], [1, 3], [1, 1], [1, 2], [1, 2], [2, 0], [2, 1], [1, 3], [3, 0], [2, 1], [2, 2], [1, 2], [2, 0], [2, 1], [1, 3]] },
	{ nome: 'Heitor', placares: [[2, 0], [1, 1], [2, 1], [0, 1], [0, 2], [1, 0], [0, 1], [1, 1], [2, 0], [0, 2], [0, 2], [2, 0], [0, 1], [2, 1], [0, 1], [1, 0], [1, 1], [2, 1], [3, 0], [2, 2], [1, 2], [2, 0], [2, 2], [0, 3], [2, 1], [0, 1], [1, 2], [0, 2], [0, 2], [1, 2], [2, 0], [0, 2], [3, 0], [1, 1], [1, 3], [1, 0], [3, 3], [1, 2], [2, 0], [1, 2], [1, 2], [1, 0], [2, 0], [2, 0], [2, 1], [0, 0], [0, 1], [0, 2]] },
	{ nome: 'Heloisa', placares: [[2, 1], [2, 0], [2, 0], [0, 3], [0, 4], [1, 0], [1, 0], [3, 0], [3, 1], [0, 3], [0, 5], [2, 1], [0, 1], [1, 0], [1, 2], [0, 1], [2, 1], [2, 1], [3, 0], [1, 2], [2, 1], [3, 0], [2, 1], [0, 2], [1, 0], [3, 0], [0, 1], [1, 1], [0, 2], [0, 2], [4, 0], [0, 1], [3, 0], [2, 0], [0, 3], [0, 0], [3, 1], [0, 2], [3, 0], [1, 2], [0, 3], [3, 0], [2, 0], [2, 0], [1, 1], [2, 2], [0, 2], [0, 2]] },
	{ nome: 'Jefferson', placares: [[2, 0], [1, 1], [2, 1], [0, 1], [0, 1], [2, 2], [0, 0], [2, 0], [1, 0], [0, 3], [0, 2], [1, 1], [2, 1], [1, 0], [1, 1], [2, 1], [1, 1], [0, 0], [3, 0], [1, 1], [2, 1], [2, 0], [2, 2], [0, 3], [2, 1], [4, 0], [1, 2], [0, 1], [0, 2], [1, 2], [2, 0], [1, 1], [3, 1], [2, 0], [1, 2], [2, 0], [2, 2], [1, 1], [2, 1], [1, 1], [1, 3], [2, 2], [3, 0], [2, 1], [2, 1], [2, 1], [1, 2], [0, 3]] },
	{ nome: 'Jonatas', placares: [[2, 0], [2, 1], [2, 1], [1, 0], [0, 3], [1, 2], [1, 1], [2, 0], [2, 0], [0, 2], [0, 3], [2, 0], [1, 0], [0, 1], [1, 2], [1, 1], [1, 2], [2, 2], [2, 1], [2, 1], [1, 1], [2, 0], [2, 1], [0, 1], [0, 1], [2, 0], [1, 2], [2, 2], [1, 2], [1, 2], [2, 0], [1, 1], [3, 0], [2, 1], [2, 1], [0, 0], [2, 1], [0, 1], [3, 0], [2, 2], [1, 2], [2, 0], [1, 0], [2, 1], [2, 3], [2, 1], [1, 1], [0, 2]] },
	{ nome: 'Jonathan', placares: [[2, 0], [2, 1], [3, 1], [0, 1], [0, 4], [2, 0], [2, 0], [2, 1], [1, 1], [1, 3], [0, 4], [1, 1], [2, 1], [1, 0], [1, 1], [0, 0], [0, 2], [1, 2], [3, 1], [2, 0], [1, 2], [4, 1], [3, 1], [0, 3], [1, 0], [2, 0], [0, 0], [0, 1], [0, 2], [1, 3], [4, 1], [0, 2], [2, 0], [1, 2], [2, 3], [1, 0], [2, 1], [1, 0], [3, 0], [0, 2], [0, 1], [3, 1], [2, 1], [3, 1], [1, 1], [2, 0], [0, 3], [0, 4]] },
	{ nome: 'Julian', placares: [[2, 1], [0, 2], [3, 1], [1, 1], [1, 1], [2, 1], [2, 2], [2, 1], [3, 1], [1, 2], [1, 3], [4, 1], [2, 1], [1, 1], [1, 1], [1, 2], [1, 1], [2, 1], [2, 1], [2, 2], [4, 2], [2, 2], [2, 3], [2, 1], [4, 1], [3, 2], [2, 1], [1, 1], [1, 1], [0, 4], [4, 1], [1, 1], [2, 1], [1, 1], [1, 3], [2, 5], [4, 4], [3, 2], [4, 1], [1, 2], [1, 3], [2, 2], [2, 2], [1, 2], [1, 1], [1, 0], [1, 1], [1, 1]] },
	{ nome: 'Luis Deschamps', placares: [[2, 1], [2, 0], [1, 0], [1, 2], [0, 2], [0, 1], [2, 0], [1, 0], [3, 0], [0, 2], [0, 3], [2, 0], [2, 0], [0, 2], [2, 0], [2, 0], [1, 2], [1, 1], [2, 1], [2, 2], [2, 2], [2, 0], [1, 2], [1, 2], [2, 1], [4, 0], [1, 2], [1, 1], [1, 2], [1, 2], [4, 0], [0, 2], [4, 0], [2, 0], [1, 3], [0, 0], [2, 2], [0, 2], [4, 0], [1, 3], [1, 3], [5, 0], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]] },
	{ nome: 'Luis Hioka', placares: [[3, 0], [0, 1], [2, 0], [3, 2], [0, 2], [1, 0], [2, 1], [1, 0], [3, 0], [0, 1], [0, 2], [2, 0], [2, 1], [0, 1], [1, 0], [2, 1], [2, 0], [1, 1], [1, 0], [1, 2], [0, 1], [2, 0], [1, 0], [1, 3], [1, 0], [2, 0], [1, 1], [1, 1], [1, 0], [0, 1], [2, 0], [1, 1], [3, 1], [2, 0], [1, 3], [1, 1], [2, 1], [0, 2], [3, 0], [1, 2], [0, 2], [2, 0], [1, 1], [1, 0], [2, 1], [2, 0], [1, 1], [0, 2]] },
	{ nome: 'Marcel', placares: [[2, 0], [1, 0], [1, 0], [0, 1], [0, 2], [1, 0], [1, 0], [1, 0], [1, 0], [0, 2], [0, 2], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [2, 0], [1, 0], [0, 2], [1, 1], [2, 0], [0, 1], [0, 1], [0, 1], [0, 1], [2, 0], [0, 1], [2, 0], [1, 0], [0, 1], [1, 0], [2, 0], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [1, 0], [1, 0], [1, 1], [0, 1], [0, 1]] },
	{ nome: 'Marcus', placares: [[1, 0], [1, 1], [2, 0], [2, 0], [0, 3], [1, 0], [3, 1], [3, 0], [2, 1], [0, 3], [4, 0], [2, 2], [2, 1], [2, 0], [2, 0], [1, 1], [1, 0], [1, 0], [1, 0], [1, 1], [0, 0], [2, 0], [2, 1], [0, 2], [0, 0], [3, 0], [0, 1], [0, 1], [0, 1], [1, 2], [4, 0], [1, 2], [2, 0], [3, 0], [0, 1], [0, 1], [2, 1], [1, 1], [2, 0], [1, 1], [1, 2], [2, 1], [2, 0], [0, 0], [2, 0], [1, 1], [0, 2], [1, 1]] },
	{ nome: 'Pollyana', placares: [[2, 0], [2, 0], [1, 0], [2, 0], [0, 1], [0, 3], [1, 1], [0, 1], [2, 0], [0, 2], [1, 1], [2, 1], [1, 2], [1, 3], [2, 1], [2, 1], [1, 1], [0, 0], [2, 0], [1, 3], [1, 2], [2, 0], [2, 2], [0, 3], [1, 0], [2, 0], [1, 3], [1, 1], [1, 1], [1, 2], [4, 1], [0, 2], [2, 0], [2, 0], [1, 2], [0, 1], [1, 1], [1, 0], [2, 1], [1, 2], [0, 3], [1, 1], [1, 2], [0, 0], [1, 2], [0, 0], [0, 0], [0, 1]] },
	{ nome: 'Rafael', placares: [[2, 0], [1, 0], [1, 1], [0, 1], [1, 2], [1, 1], [1, 1], [2, 1], [2, 1], [0, 2], [0, 2], [2, 0], [1, 0], [1, 1], [1, 0], [1, 1], [1, 1], [1, 1], [2, 0], [1, 1], [1, 0], [2, 1], [1, 1], [0, 2], [1, 1], [3, 1], [1, 2], [1, 1], [1, 1], [1, 2], [2, 1], [1, 2], [2, 0], [2, 1], [1, 1], [1, 1], [2, 2], [1, 1], [2, 0], [0, 3], [0, 2], [2, 1], [1, 1], [1, 1], [1, 1], [0, 1], [0, 1], [1, 1]] },
	{ nome: 'Ricardo', placares: [[1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [0, 1], [1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [1, 0], [0, 1], [1, 0], [0, 1], [0, 1]] },
	{ nome: 'Sacha', placares: [[2, 0], [2, 1], [3, 1], [1, 0], [0, 1], [0, 2], [1, 1], [2, 1], [3, 2], [1, 2], [0, 1], [1, 1], [1, 0], [1, 0], [1, 0], [0, 0], [0, 2], [1, 0], [3, 0], [0, 2], [1, 2], [2, 0], [1, 2], [1, 1], [1, 1], [2, 1], [0, 2], [1, 0], [1, 0], [0, 2], [3, 0], [0, 1], [3, 0], [1, 1], [1, 2], [2, 1], [2, 3], [2, 1], [3, 1], [0, 2], [0, 2], [2, 0], [1, 2], [1, 1], [1, 2], [1, 2], [1, 2], [1, 1]] },
	{ nome: 'Simone', placares: [[3, 0], [1, 0], [2, 1], [2, 0], [1, 2], [0, 1], [2, 1], [1, 0], [2, 0], [1, 2], [1, 3], [1, 0], [1, 0], [0, 1], [1, 1], [2, 0], [1, 0], [1, 1], [2, 0], [1, 2], [2, 1], [3, 0], [1, 1], [0, 1], [0, 1], [3, 0], [1, 3], [2, 0], [2, 1], [1, 3], [3, 0], [0, 2], [3, 1], [2, 0], [1, 3], [1, 1], [1, 2], [0, 1], [1, 0], [1, 3], [1, 2], [3, 0], [1, 0], [0, 0], [1, 0], [0, 1], [0, 1], [1, 1]] },
	{ nome: 'Thales', placares: [[1, 1], [2, 2], [3, 1], [2, 1], [0, 2], [1, 3], [3, 2], [0, 0], [4, 0], [1, 2], [0, 3], [3, 1], [2, 0], [1, 3], [1, 1], [2, 1], [2, 2], [1, 1], [2, 0], [2, 2], [1, 2], [4, 1], [3, 2], [0, 3], [1, 1], [2, 0], [1, 3], [1, 1], [1, 2], [0, 3], [4, 0], [1, 3], [3, 1], [2, 1], [3, 3], [2, 2], [2, 2], [1, 3], [4, 1], [1, 3], [2, 4], [3, 0], [0, 0], [1, 1], [2, 1], [2, 3], [2, 0], [1, 3]] },
	{ nome: 'Valder', placares: [[2, 1], [2, 0], [1, 0], [1, 1], [0, 3], [0, 2], [2, 1], [0, 0], [1, 0], [0, 2], [1, 2], [1, 1], [1, 0], [1, 1], [0, 1], [1, 1], [1, 0], [0, 1], [1, 0], [1, 2], [1, 0], [1, 0], [1, 1], [1, 2], [1, 0], [2, 0], [1, 1], [0, 0], [0, 1], [0, 2], [2, 1], [1, 1], [3, 0], [1, 1], [0, 2], [0, 0], [1, 1], [1, 1], [2, 1], [2, 1], [0, 1], [1, 0], [0, 0], [1, 1], [0, 1], [1, 2], [1, 1], [0, 0]] },
	{ nome: 'Macaco :monkey:', placares: [[1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0]] },
	{ nome: 'Super Macaco :speak_no_evil:', placares: [[1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [0, 1], [1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [0, 1]] }
];

var JOGOS = [1, 2, 17, 18, 33, 34, 3, 4, 19, 20, 35, 36, 5, 6, 21, 22, 37, 38, 7, 8, 23, 24, 39, 40, 9, 10, 25, 26, 41, 42, 11, 12, 27, 28, 43, 44, 13, 14, 29, 30, 45, 46, 15, 16, 31, 32, 47, 48, 49, 50, 51, 52, 52, 54, 55, 56];

var RESULTADOS = [
	[],
	[1, 0],
	[],
	[],
	[],
	[],
	[1, 5],
	[3, 1],
	[],
	[],
	[],
	[],
	[3, 0],
	[2, 1],
	[],
	[],
	[],
	[],
	[1, 3],
	[1, 2],
	[],
	[],
	[],
	[],
	[2, 1],
	[3, 0],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[4, 0],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
];

define(['jquery', 'underscore', 'app/aposta', 'app/placar'], function ($, _, Aposta, Placar) {
  var apostas = [];

  var getIndex = function (jogo) {
    for (var i = 0; i < JOGOS.length; i++) {
      if (JOGOS[i] === jogo + 1) {
        return i;
      }
    }
  };

  for (var i = 0; i < APOSTAS.length; i++) {
    var aposta = new Aposta(APOSTAS[i].nome);
    for (var j = 0; j < JOGOS.length; j++) {
      var placar = APOSTAS[i].placares[getIndex(j)];
      aposta.placares[j] = placar ? new Placar(0, '', '', placar[0], placar[1]) : new Placar();
    }
    apostas.push(aposta);
  }

  return {
    apostas: apostas,
    resultados: _.map(RESULTADOS, function () {
      return new Placar();
    })
  };
});
