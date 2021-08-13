function sumIntervals(intervals) {
	const deepCopy = (arr) => {
		let copy = [];
		arr.forEach((elem) => {
			if (Array.isArray(elem)) {
				copy.push(deepCopy(elem));
			} else {
				copy.push(elem);
			}
		});
		return copy;
	};

	let filteredIntervals = [];

	filteredIntervals = intervals.sort(function (a, b) {
		return a[0] - b[0];
	});

	function connectOfTheIntersect(arrayToConnect) {
		let beforeTheConnect = JSON.stringify(arrayToConnect);

		for (let i = 0; i < arrayToConnect.length - 1; i += 1) {
			if (
				arrayToConnect[i][1] >= arrayToConnect[i + 1][0] &&
				arrayToConnect[i][1] <= arrayToConnect[i + 1][1]
			) {
				// Текущий интервал пересекается со следующим интервалом
				arrayToConnect[i] = [arrayToConnect[i][0], arrayToConnect[i + 1][1]];
				arrayToConnect.splice(i + 1, 1);
			} else if (
				// Текущий интервал должен поглотить следующий (пример: step [ [ 1, 20 ], [ 16, 19 ] ])
				arrayToConnect[i][1] > arrayToConnect[i + 1][0] &&
				arrayToConnect[i][1] > arrayToConnect[i + 1][1]
			) {
				arrayToConnect[i] = [arrayToConnect[i][0], arrayToConnect[i][1]];
				arrayToConnect.splice(i + 1, 1);
			}
		}

		let afterTheConnect = JSON.stringify(arrayToConnect);

		if (beforeTheConnect == afterTheConnect) {
			filteredIntervals = arrayToConnect;
		} else connectOfTheIntersect(arrayToConnect);
	}

	connectOfTheIntersect(filteredIntervals);

	let result = 0;
	for (let interval of filteredIntervals) result += interval[1] - interval[0];
	return result;
}
