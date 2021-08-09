function solution(number) {
  if (number < 0) return 0;

  let numbersToReturn = [];

  let threePlusThree = 3;
  while (threePlusThree < number) {
    numbersToReturn.push(threePlusThree);
    threePlusThree += 3;
  }

  let fivePlusFive = 5;
  while (fivePlusFive < number) {
    if (numbersToReturn.includes(fivePlusFive) === false)
      numbersToReturn.push(fivePlusFive);
    fivePlusFive += 5;
  }

  if (numbersToReturn.length >= 1) {
    return numbersToReturn.reduce((accum, current) => accum + current);
  } else return 0;
}
