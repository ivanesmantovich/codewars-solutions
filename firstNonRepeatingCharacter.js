// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    // Пропы - буквы без регистра; значения - встретился повтор или нет, в каком кейсе впервые встречается буква
	let appearedLetters = new Object();
	for (let letter of s) {
		let trueCaseLetter = letter;
		letter = letter.toLowerCase();
        // Если буква еще не встречалась
		if (appearedLetters.hasOwnProperty(letter) == false) {
			appearedLetters[letter] = { repeated: false, trueCase: trueCaseLetter };
        // Если буква уже встречалсь
		} else {
			appearedLetters[letter].repeated = true;
		}
	}

	for (let letter in appearedLetters) {
        // Возврат первой неповторенной буквы в правильном кейсе
		if (appearedLetters[letter].repeated == false)
			return appearedLetters[letter].trueCase;
	}

    // Если все буквы повторялись, то возврат пустой строки
	return '';
}

console.log(firstNonRepeatingLetter('sTreSS'));
