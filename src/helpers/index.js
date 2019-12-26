export const operators = ["+", "-", "*", "/"];
export function generateRandomNumber(maxNo) {
	return Math.floor(Math.random() * maxNo);
}

export const operatorCalculator = {
	"+": (a, b) => a + b,
	"-": (a, b) => a - b,
	"*": (a, b) => a * b,
	"/": (a, b) => a / b,
};
