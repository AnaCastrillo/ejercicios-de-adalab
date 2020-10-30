class Polygon {
	constructor(numberOfSides) {
		this.numberOfSides = numberOfSides;
	}
	base = 0;
	heigth = 0;

	perimeter() {
		return this.base * this.numberOfSides;
	}
	area() {
		return this.base * this.heigth;
	}
}

class Square extends Polygon {
	constructor(side) {
		super(4);
		this.base = side;
		this.heigth = side;
	}
}

class Triangle extends Polygon {
	constructor(base, heigth) {
		super(3);
		this.base = base;
		this.heigth = heigth;
	}

	area() {
		return super.area() / 2;
	}
}

const square = new Square(4);
const triangle = new Triangle(4, 3);

console.log(
	'SQUARE: perimeter: ' + square.perimeter() + ', area: ' + square.area()
);

console.log(
	'TRIANGLE: perimeter: ' + triangle.perimeter() + ', area: ' + triangle.area()
);
