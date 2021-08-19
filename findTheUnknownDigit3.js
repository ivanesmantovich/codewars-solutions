function solveExpression(exp) {
	console.log('currentExp', exp);
	// Использованные номера не могут быть под знаком вопроса +

	let usedNums = [];
	for (let character of exp) {
		for (let i = 0; i < 10; i += 1) {
			if (character == i) usedNums.push(Number(character));
		}
	}
	let numsToUse = [];
	for (let i = 1; i < 10; i += 1) {
		if (usedNums.includes(i) == false) numsToUse.push(i);
	}

	//----------------------------------------------------------------

	let zeroesNotAllowed = false;

	// for (let i = 0; i < exp.length; i += 1) {
	// 	//                    2+ вопроса       |               является ли началом числа
	// 	if (
	// 		exp[i] == '?' &&
	// 		exp[i + 1] == '?' &&
	// 		(exp[i] == firstNumber[0] ||
	// 			exp[i] == secondNumber[0] ||
	// 			exp[i] == thirdNumber[0])
	// 	) {
	// 		zeroesNotAllowed = true;
	// 	}
	// }

	for (let i = 0; i < exp.length; i += 1) {
		//                    2+ вопроса       |               является ли началом числа
		if (
			exp[i] == '?' &&
			exp[i + 1] == '?' &&
			(exp[i - 1] == undefined ||
				exp[i - 1] == '-' ||
				exp[i - 1] == '+' ||
				exp[i - 1] == '*' ||
                exp[i - 1] == '=')
		) {
			zeroesNotAllowed = true;
		}
	}

	//----------------------------------------------------------------

	if (zeroesNotAllowed == false && usedNums.includes(0) == false)
		numsToUse.unshift(0);
	console.log('numsToUse:', numsToUse);

	let changedExpression;

	for (let digit of numsToUse) {
		changedExpression = exp.replace(/\?/g, digit);
		changedExpression = changedExpression.replace(/=/g, '==');

		let numbers = [];
		let currentNumber = '';
		let pushingMode = false;

		for (let i = 0; i < changedExpression.length; i += 1) {
			// Если встречается число или вопросительный знак, то это начало числа
			if (
				Number.isInteger(Number.parseInt(changedExpression[i])) == true ||
				changedExpression[i] == '?'
			) {
				pushingMode = true;
			} else pushingMode = false;

			// При доходе до конца отключить пушМод
			if (i == changedExpression.length - 1) {
				currentNumber += changedExpression[changedExpression.length - 1];
				numbers.push(currentNumber);
			}

			if (pushingMode == true) currentNumber += changedExpression[i];
			if (pushingMode == false) {
				numbers.push(currentNumber);
				currentNumber = '';
			}
		}

		numbers = numbers.filter((number) => number.length > 0);

		let firstNumber = numbers[0];
		let secondNumber = numbers[1];
		let thirdNumber = numbers[2];

		// Определить знаки

		let operator;

		for (let i = 0; i < changedExpression.length; i += 1) {
			// Обнаружение минуса перед первым числом
			if (
				changedExpression[i] == '-' &&
				changedExpression[i + 1] ==
					changedExpression[changedExpression.indexOf(firstNumber)]
			)
				firstNumber = '-' + firstNumber;
			// Обнаружение минуса перед вторым числом
			if (
				changedExpression[i] == '-' &&
				changedExpression[i + 1] ==
					changedExpression[changedExpression.indexOf(secondNumber)] &&
				(changedExpression[i - 1] == '-' ||
					changedExpression[i - 1] == '*' ||
					changedExpression[i - 1] == '+')
			)
				secondNumber = '-' + secondNumber;
			// Обнаружение минуса перед третьим числом
			if (
				changedExpression[i] == '-' &&
				changedExpression[i + 1] ==
					changedExpression[changedExpression.indexOf(thirdNumber)] &&
				changedExpression[i - 1] == '='
			)
				thirdNumber = '-' + thirdNumber;

			// Обнаружение оператора
			// if (changedExpression[i] == '*') operator = '*';
			// if (changedExpression[i] == '+') operator = '+';
			// if (changedExpression[i] == '-' && (changedExpression[i - 1] == '-' || changedExpression[i + 1] == '-' ||  ) ) operator = '-';
			// Как определить что оператор -
			// Взять область между первым и вторым числом
			// Если она равна -- или +- ili *- ili - then operator = '-'
		}

		// !!!!!!!!!!!! КОММЕНТ РАСКОМЕНТ !!!!!!!!!!!!
		// firstNumber = firstNumber.slice(firstNumber.lastIndexOf('-'));
		// secondNumber = secondNumber.slice(secondNumber.lastIndexOf('-'));
		// thirdNumber = thirdNumber.slice(thirdNumber.lastIndexOf('-'));
		// !!!!!!!!!!!! КОММЕНТ РАСКОМЕНТ !!!!!!!!!!!!

		// Обнаружение оператора
		let operatorZone = changedExpression.slice(
			firstNumber.length,
			firstNumber.length + 1
		);
		console.log('operatorZone:', operatorZone);

		console.log(
			'first:',
			firstNumber,
			'second:',
			secondNumber,
			'third:',
			thirdNumber
		);

		// IF PERVOE ZNAK VTOROE == TRETIE TRUE RETURN

		firstNumber = Number(firstNumber);
		secondNumber = Number(secondNumber);
		thirdNumber = Number(thirdNumber);

		if (operatorZone == '-') {
			console.log(
				firstNumber,
				'-',
				secondNumber,
				'=',
				thirdNumber,
				firstNumber - secondNumber == thirdNumber
			);
			if (firstNumber - secondNumber == thirdNumber) return digit;
		}
		if (operatorZone == '+') {
			console.log(
				firstNumber,
				'+',
				secondNumber,
				'=',
				thirdNumber,
				firstNumber + secondNumber == thirdNumber
			);
			if (firstNumber + secondNumber == thirdNumber) return digit;
		}
		if (operatorZone == '*') {
			console.log(
				firstNumber,
				'*',
				secondNumber,
				'=',
				thirdNumber,
				firstNumber * secondNumber == thirdNumber
			);
			if (firstNumber * secondNumber == thirdNumber) return digit;
		}
	}
	// Если программа доходит до конца без результата возвращать -1
	return -1;
}

console.log(solveExpression('??*??=302?'));
// console.log('realityCheck', 1 + 1 == 2);
// let first = -771565;
// let second = -484600;
// let third = -286965;
// console.log(first - second == third)

// ['1+1=?', 2],
// ['123*45?=5?088', 6],
// ['-5?*-1=5?', 0],
// ['19--45=5?', -1],
// ['??*??=302?', 5],
// ['?*11=??', 2],
// ['??*1=??', 2],
// ['??+??=??', -1]];
