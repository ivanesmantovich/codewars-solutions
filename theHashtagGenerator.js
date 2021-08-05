function generateHashtag(str) {
  if (str.length == 0) return false;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let resultString = ' '.concat(str).split(' ');
  for (let i = 0; i < resultString.length; i += 1)
    resultString[i] = capitalizeFirstLetter(resultString[i]);
  resultString = '#'.concat(resultString.join(''));
  if (
    resultString.length == 0 ||
    resultString.length > 140 ||
    resultString == '#'
  )
    return false;
  return resultString;
}
