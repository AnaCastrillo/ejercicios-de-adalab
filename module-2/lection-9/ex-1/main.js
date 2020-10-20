"use strict";

const numList = [1];

// for (let i = 2; i < 101; i++) {
// 	const number = i;
// 	numList.push(number);
// }

// console.log(numList);

function get100Numbers() {
	for (let i = 2; i < 101; i++) {
		const number = i;
		numList.push(number);
	}
	return console.log(numList);
}

get100Numbers();
