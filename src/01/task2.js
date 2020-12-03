const { YEAR } = require("../utility");

function getPair(inputArr, sum) {
  const pairSet = new Set();

  for (let num of inputArr) {
    const pair = sum - num;

    if (pairSet.has(pair)) {
      return [pair, sum - pair];
    } else {
      pairSet.add(num);
    }
  }
}

exports.get2020TripletProduct = (inputArr) => {
  for (let i = 0; i < inputArr.length; i++) {
    const firstNumber = inputArr[i];

    const pairSum = YEAR - firstNumber;
    const pairArr = [...inputArr]
    pairArr.splice(i,1)
    
    const pair = getPair(pairArr, pairSum);

    if (pair) return firstNumber * pair[0] * pair[1];
  }
};
