// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function (arr) {
	if (arr.length == 0 || Math.max(...arr) < 0) return 0;
	let currentMax = -Infinity;

	function sizeIteration(arrSize) {
		for (
			let startIndex = 0;
			startIndex < arr.length - arrSize + 1;
			startIndex += 1
		) {
			// В начало вложен размер подмассива, можно проходить по максимуму, выход за край не произойдет

			let sum = arr[startIndex];
			for (let plus = 1; plus < arrSize; plus += 1) {
				sum += arr[startIndex + plus];
			}
			if (sum > currentMax) currentMax = sum;
		}
	}

	for (let size = 1; size <= arr.length; size += 1) sizeIteration(size);

	return currentMax;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

