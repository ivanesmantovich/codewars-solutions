function tribonacci(signature, n) {
  let resultArray = [];
  Array.prototype.push.apply(resultArray, signature);
  for (let i = 0; i < n - 3; i += 1) {
    resultArray.push(resultArray[i] + resultArray[i + 1] + resultArray[i + 2]);
  }
  return resultArray.slice(0, n);
}
