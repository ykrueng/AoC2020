const { getInputArray } = require("../utility");
const { getTreeCount } = require("./task1");

const inputArr = getInputArray("03/input.txt", "string");

const notAvailable = () => 'Not yet available'

exports.day03part1 = () => getTreeCount(inputArr);
exports.day03part2 = () => notAvailable(inputArr);
