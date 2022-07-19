const caesar = function (str, num) {
  let regular = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let capital = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let Reg = [...regular];
  let Cap = [...capital];
  let charR;
  let charC;
  let index;
  let split = str.split("");
  let result = [];
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      charR = Reg.shift();
      charC = Cap.shift();
      Reg.push(charR);
      Cap.push(charC);
    }
  } else if (num < 0) {
    for (let i = 0; i > num; i--) {
      charR = Reg.pop();
      charC = Cap.pop();
      Reg.unshift(charR);
      Cap.unshift(charC);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (capital.includes(split[i])) {
      index = capital.indexOf(split[i]);
      result.push(Cap[index]);
    } else if (regular.includes(split[i])) {
      index = regular.indexOf(split[i]);
      result.push(Reg[index]);
    } else {
      result.push(split[i]);
    }
  }
  return result.join("");
};

module.exports = caesar;
