function analizeArray(arr) {
  return {
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => a - b)[arr.length - 1],
    average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
    length: arr.length,
  };
}
module.exports = analizeArray;
