function isPangram(string) {
  let alphabet = [];
  for (let letter of string.toLowerCase()) {
    if (/[a-zA-Z]/.test(letter)) {
      if (alphabet.includes(letter) == false) {
        alphabet.push(letter);
      }
    }
  }
  if (alphabet.length >= 26) return true;
  else return false;
}
