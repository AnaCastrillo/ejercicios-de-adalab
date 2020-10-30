const pins = [2389, 2384, 2837, 5232, 8998];
console.log(pins);

for (const pin of pins) {
}

function evenNum(pin) {
	const odd = pin % 2;
	if (!odd) {
		return pin;
	}
}

const evenPin = pins.filter(evenNum);
console.log(evenPin);
