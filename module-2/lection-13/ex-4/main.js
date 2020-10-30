// exercise 4
const users = [
	{ name: 'María', isPremium: false },
	{ name: 'Lucía', isPremium: true },
	{ name: 'Susana', isPremium: true },
	{ name: 'Rocío', isPremium: false },
	{ name: 'Inmaculada', isPremium: false },
];

console.log(users);
for (const user of users) {
	if (user.isPremium === true) {
		const premium = user.isPremium;
	}
	console.log(user.isPremium);
}
function searchPremium(user) {
	return user.isPremium === true;
}
const premiumChecklist = users.filter(searchPremium);
console.log(premiumChecklist);
