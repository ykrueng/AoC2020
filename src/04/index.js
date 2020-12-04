const { getInputArray } = require("../utility");
const { getValidPassportCount } = require("./task1");
const { getValidPassportCount2 } = require("./task2");

const inputArr = getInputArray("04/input.txt", "string", "\n\n");

exports.day04part1 = () => getValidPassportCount(inputArr);
exports.day04part2 = () => getValidPassportCount2(inputArr);
