function order(words) {
  let arrayThatNeedsToBeOrdered = words.split(' ');
  let goodArray = [];
  for (let word of arrayThatNeedsToBeOrdered) {
    for (let letter of word) {
      if (isNaN(parseInt(letter)) == false) goodArray[letter] = word;
    }
  }
  return goodArray.join(' ').slice(1);
}
