const { YEAR } = require("../utility");

exports.get2020PairProduct = inputArr => {
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
