"use strict";

const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");

function writeText() {
	text.innerHTML = input.value;
	const textSave = text.innerHTML;
	localStorage.setItem("textInStorage", textSave);
	console.log(textSave);
}

function getText() {
	const storageText = localStorage.getItem("textInStorage");
	if (storageText !== null) {
		input.value = storageText;
		text.innerHTML = storageText;
	}
}

input.addEventListener("keyup", writeText);

getText();
