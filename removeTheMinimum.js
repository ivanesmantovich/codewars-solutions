// Good practice
function removeSmallest(numbers) {
	if (numbers.length == 0) return [];
	let workArray = [...numbers];
	let minimum = Math.min(...workArray);
	for (let num of workArray) {
		if (num == minimum) {
			workArray.splice(workArray.indexOf(num), 1);
			return workArray;
		}
	}
}

//Clever
function removeSmallest(numbers) {
	if (numbers.length == 0) return [];
	let workArray = [...numbers];
    workArray.splice(workArray.indexOf(Math.min(...workArray)), 1);
    return workArray;
}