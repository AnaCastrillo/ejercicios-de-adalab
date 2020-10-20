"use strict";

const tasks = [
	{ name: "Recoger setas en el campo", completed: true },
	{ name: "Comprar pilas", completed: true },
	{ name: "Poner una lavadora de blancos", completed: true },
	{
		name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
		completed: false,
	},
];

const element = document.querySelector(".element");
let taskName = [];
let taskComplete = [];
const list = document.querySelector(".list");
for (const task of tasks) {
	taskName.push(task.name);
	taskComplete.push(task.completed);
}
for (let i = 0; i < taskName.length; i++) {
	list.innerHTML += "<li class='element'>" + taskName[i] + "</li>";
	// if (taskComplete[i] === true) {
	// 	element.classList.add("complete");
	// }
}

console.log(taskName);

// const listElement = document.createElement("p");
// listElement.innerHTML = tasks[0];
