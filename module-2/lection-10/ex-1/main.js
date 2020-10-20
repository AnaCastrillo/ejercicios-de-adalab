"use strict";

// function getEmoji() {
// 	fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
// 		.then((response) => response.json())
// 		.then((data) => {
// 			document.querySelector(".js-result").innerHTML = data.result;
// 		});
// }

function getNum() {
	fetch("https://api.rand.fun/number/integer?max=100")
		.then(function (response) {
			return response.json();
		})
		.then(function (num) {
			document.querySelector(".js-result").innerHTML = num.result;
		})
		.catch((error) => console.log(`Ha sucedido un error: ${error}`));
}

document.querySelector(".js-num").addEventListener("click", getNum);
