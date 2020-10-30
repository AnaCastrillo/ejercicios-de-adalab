class Square {
	perimeter(side) {
		console.log(side * 4);
	}
	area(side) {
		console.log(side * side);
	}
}

const nine = new Square();

nine.perimeter(9);
nine.area(9);
