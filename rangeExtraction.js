// A format for expressing an ordered list of integers is to use a comma separated list of either

//     individual integers
//     or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

function solution(list) {
	let resultString = '';
	let rangeHolder = [list[0]];

	function rangeProcessor(index = 0) {
		// Если в ренже всего 1-2 цифры, то тогда они добавляются к возвратной строке
		if (rangeHolder.length < 3) {
			for (number of rangeHolder) resultString += number + ',';
		}
		// Если в ренже больше двух цифр то они преобразуются в вид 'перваяЦифра-последняяЦифра'
		else
			resultString +=
				rangeHolder[0] + '-' + rangeHolder[rangeHolder.length - 1] + ',';
		// Обработка текущего ренжа окончена, ренж опустошается и подгатавливается к дальнейшей работе
		rangeHolder = [list[index]];
	}

	for (let i = 1; i < list.length; i += 1) {
		// Если цифра больше последней цифры в ренже на единицу, то она добавляется в ренж
		if (list[i] == rangeHolder[rangeHolder.length - 1] + 1)
			rangeHolder.push(list[i]);
		// Иначе обработка накопившегося ренжа
		else rangeProcessor(i);
	}
	rangeProcessor();
	return resultString.slice(0, resultString.length - 1);
}

console.log(
	solution([
		-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
	])
);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"