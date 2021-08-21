function topThreeWords(text) {
	const word = /[\w']+/g;

	// Massiv slov iz teksta
	let matches = text.match(word);

	if (matches == null) return [];
	// Vse slova v lowercase (po zadaniyu)
	for (let i = 0; i < matches.length; i += 1)
		matches[i] = matches[i].toLowerCase();

	// Kol-vo poyavlenii kazhdogo slova v tekste
	const countOccurrences = (arr, val) =>
		arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
	let numberOfOccurencies = {};
	for (let word of matches)
		numberOfOccurencies[word] = countOccurrences(matches, word);
	// Po ubivaniyu
	// Sadly only ES10+
	// numberOfOccurencies = Object.fromEntries(
	// 	Object.entries(numberOfOccurencies).sort(([, a], [, b]) => b - a)
	// );
	// ES8+
	numberOfOccurencies = Object.entries(numberOfOccurencies)
		.sort(([, a], [, b]) => b - a)
		.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

	// Top 3 po kol-vu vstrech dlya returna
	let top3 = [];
	for (let i = 0; i < 3; i += 1) top3.push(Object.keys(numberOfOccurencies)[i]);
	for (let i = 0; i < top3.length; i += 1) {
		// WTF
		if (top3[i] == "'") top3[i] = undefined;
	}
	top3 = top3.filter((word) => word != undefined);

	return top3;
}

console.log(topThreeWords("  //wont won't won't"));
