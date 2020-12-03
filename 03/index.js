const { getInputArray } = require("../utility");
const { getTreeCount } = require("./task1");
const { getTreeProduct } = require("./task2");

const inputArr = getInputArray("03/input.txt", "string");

const notAvailable = () => "Not yet available";

exports.day03part1 = () => getTreeCount(inputArr);
exports.day03part2 = () => getTreeProduct(inputArr);
exports.inputArr = inputArr;
