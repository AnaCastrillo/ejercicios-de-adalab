// exercise 2
const users = [
	{ name: 'María', isPremium: false },
	{ name: 'Lucía', isPremium: true },
	{ name: 'Susana', isPremium: true },
	{ name: 'Rocío', isPremium: false },
	{ name: 'Inmaculada', isPremium: false },
];

let namesGreeting;
if (!!users.isPremium) {
	const greeting = (user) => 'Bienvenida ' + user.name;
	namesGreeting = users.map(greeting);
} else {
	const greeting = (user) =>
		'Bienvenida ' + user.name + '. Gracias por confiar en nosotros.';
	namesGreeting = users.map(greeting);
}

const List = document.querySelector('ul');

for (const nameGreeting of namesGreeting) {
	const newLi = document.createElement('li');

	const newContent = document.createTextNode(nameGreeting);
	newLi.appendChild(newContent);

	List.appendChild(newLi);
}

// Map no sirve para esto sin un filtro que separe a las premium de las no
