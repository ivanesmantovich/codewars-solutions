function rowSumOddNumbers(n) {
	let oddRows = new Array(0, 1);
  let lastUsedNumber = 1;
  let numsInRow = 2
  for (let row = 2; row <= n; row += 1) {
    let rowSum = 0;
    for (let i = 0; i < numsInRow; i += 1) {
      rowSum += lastUsedNumber + 2;
      lastUsedNumber += 2;
    }
    numsInRow += 1;
    oddRows[row] = rowSum;
  }
  return oddRows[n];
}