const numbers = [1, 2, 3];
const List = document.querySelector('ul');

for (const num of numbers) {
	const newLi = document.createElement('li');

	console.log(num);
	const newContent = document.createTextNode(num);
	console.log(newContent);

	newLi.appendChild(newContent);
	console.log(newLi);

	List.appendChild(newLi);
}
