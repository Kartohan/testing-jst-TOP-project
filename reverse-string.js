function reverseString(string) {
  let stringSplit = string.split("");
  let stringReverse = stringSplit.reverse();
  let stringJoin = stringReverse.join("");
  return stringJoin;
}

module.exports = reverseString;
