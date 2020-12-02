const { getInputArray } = require("../utility");

const inputArr = getInputArray("01/input.txt");
const YEAR = 2020;
exports.day01part1 = () => {
  const pair2020 = new Set();

  for (let num of inputArr) {
    const pair = YEAR - num;

    if (pair2020.has(pair)) {
      return pair * (YEAR - pair);
    } else {
      pair2020.add(num);
    }
  }
};
