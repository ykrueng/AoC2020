const { getTreeCount } = require("./task1");

const SLOPES = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

exports.getTreeProduct = (inputArr) => {
  return SLOPES.reduce((acc, slope) => acc * getTreeCount(inputArr, slope[0], slope[1]), 1)
};
