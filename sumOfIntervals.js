// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
// Intervals

// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Брать интервал оригинального массива и сравнивать с массивом интервалов где этот интервал вырезан

function sumIntervals(intervals) {
	let usedNumbers = [];
	for (let interval of intervals) {
        console.log('interval', interval);
		for (let number of interval) {
			if (!usedNumbers.includes(number)) usedNumbers.push(number);
		}
	}
}

sumIntervals([
	[1, 2], // 1
	[6, 10], // 7,8,9
	[11, 15], // 12,13,14
]); // => 9

sumIntervals([
	[1, 4],
	[7, 10],
	[3, 5],
]); // => 7

sumIntervals([
	[1, 5], // -
	[10, 20], // 19
	[1, 6], // -
	[16, 19],  
	[5, 11], // 10
]); // => 19



// let testArray = [];
// testArray.push([1,3]);
// console.log(testArray);
// if (JSON.stringify(testArray).includes(JSON.stringify([1,3]))) console.log('includes');
// else console.log('not')