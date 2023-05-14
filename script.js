class Calculator {
	_num1;
	_num2;
	constructor(num1, num2) {
		if (!num1 || !num2) {
			throw new Error('num1 and num2 must be present.');
		}
		if (typeof num1 == 'string' || typeof num2 == 'string') {
			throw new Error('num1 and num2 must be a type of number.');
		}
		if (num1 <= -1 || num2 <= -1) {
			throw new Error('num1 and num2 must not be less or equal to 0.');
		}
		this._num1 = num1;
		this._num2 = num2;
	}
	add() {
		return this._num1 + this._num2;
	}
	subtract() {
		return this._num1 - this._num2;
	}
	divide() {
		return this._num1 / this._num2;
	}
	multiply() {
		return this._num1 * this._num2;
	}
}

let classmate = new Calculator(0, 15);
console.log(classmate.multiply());
