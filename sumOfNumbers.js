function getSum(a, b) {
  let smallest = a > b ? b : a;
  let biggest = smallest == a ? b : a;
  if (a == b) return a;
  let resultSum = 0;
  while (smallest <= biggest) {
    resultSum += smallest;
    smallest += 1;
  }
  return resultSum;
}
