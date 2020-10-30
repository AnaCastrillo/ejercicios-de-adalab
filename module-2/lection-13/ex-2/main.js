// exercise 2
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const greeting = (name) => 'Bienvenida, ' + name;
const namesGreeting = names.map(greeting);

const List = document.querySelector('ul');

for (const nameGreeting of namesGreeting) {
	const newLi = document.createElement('li');

	const newContent = document.createTextNode(nameGreeting);
	newLi.appendChild(newContent);

	List.appendChild(newLi);
}
