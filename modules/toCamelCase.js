function toCamelCase(string) {
	let words = string.split(' ');
	words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);
	for (let i = 1; i < words.length; i += 1) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	return words.join('');
}

console.log(toCamelCase('Vigenère Cipher Helper'))

module.exports = {
	toCamelCase
}