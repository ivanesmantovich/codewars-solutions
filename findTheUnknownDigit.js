// To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

// You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

// The professor will give you a simple math expression, of the form

// [number][op][number]=[number]

// He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

// Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

// Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.

function solveExpression(exp) {
	// let expression = exp.slice(0, exp.indexOf('='));
	// let answer = exp.slice(exp.indexOf('=') + 1);
	// console.log(expression, answer);

	const singleQM = /([^?])(\?)([^?])/g; // str.replace(/(.*name="\w+)(\d+)(\w+".*)/, "$1!NEW_ID!$3")
	// const singleQMAfterNum = /(\d)(\?)(\B|\b|$)/g;
	const singleQMAfterNum = /(\d)(\?)(\B|\b|$)/g;
	const multipleQM = /\?/g;
	let changedExpression;

	// changedExpression = exp.replace(singleQM, '$10$3');
	// changedExpression = changedExpression.replace(/=/g, '==');
	// console.log(changedExpression);
	// if (eval(changedExpression) == true) return 0;

	// changedExpression = exp.replace(singleQMAfterNum, '$10$3');
	// changedExpression = changedExpression.replace(/=/g, '==');
	// try {
	// 	eval(changedExpression);
	// } catch (error) {
	// 	// if (error instanceof SyntaxError) {
	// 	// попробовать без ифа
	// 	// попробовать с ифом
	// 	for (let digit = 1; digit < 10; digit += 1) {
	// 		changedExpression = exp.replace(multipleQM, digit);
	// 		changedExpression = changedExpression.replace(/=/g, '==');
	// 		if (eval(changedExpression) == true) {
	// 			console.log(changedExpression);
	// 			return digit;
	// 		}
	// 	}
	// 	// }
	// }
	// if (eval(changedExpression) == true) return 0;

	function tryZero() {
		changedExpression = exp.replace(singleQMAfterNum, '$10$3');
		changedExpression = changedExpression.replace(/=/g, '==');
		console.log(changedExpression);
		if (eval(changedExpression) == true) return 0;
	}

	function tryNums() {
		for (let digit = 1; digit < 10; digit += 1) {
			changedExpression = exp.replace(multipleQM, digit);
			changedExpression = changedExpression.replace(/=/g, '==');
			if (eval(changedExpression) == true) {
				console.log(changedExpression);
				return digit;
			}
		}
	}

	// try {
	// 	eval(exp);
	// } catch (error) {
	// 	if (error instanceof SyntaxError) {
	// 		b = -1;
	// 	}
	// }

	if (tryZero() == undefined) {
		return tryNums();
	} else return tryZero();
}

console.log(solveExpression('123*45?=5?088'));

// describe('Fixed tests', function() {
//     it('Example tests', function() {
//       var data = [
//         ['1+1=?', 2],
//         ['123*45?=5?088', 6],
//         ['-5?*-1=5?', 0],
//         ['19--45=5?', -1],
//         ['??*??=302?', 5],
//         ['?*11=??', 2],
//         ['??*1=??', 2],
//         ['??+??=??', -1]];
//       for(let [exp, expected] of data) Test.assertEquals(solveExpression(exp), expected);
//     });
//   });

// let a = eval('4+4');
// let b;

// try {
//     eval('19--45');
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         b = -1;
//     }
// }

// console.log(a, b);

// console.log(eval('55*55==3025'));

// function testFunc() {
// 	console.log('hi');
// }

// console.log(testFunc() == undefined);
