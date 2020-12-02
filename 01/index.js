const { get2020PairProduct } = require("./task1");
const { getInputArray } = require("../utility");

const inputArr = getInputArray("01/input.txt");

exports.day01part1 = () => get2020PairProduct(inputArr);
