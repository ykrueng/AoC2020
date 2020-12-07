const { getInputArray } = require("../utility");
const { getQuestionSum } = require("./task1");
const { getQuestionSum2 } = require("./task2");

const inputArr = getInputArray("06/input.txt", "string", "\n\n");

exports.day06part1 = () => getQuestionSum(inputArr.map(input => input.split("\n")));
exports.day06part2 = () => getQuestionSum2(inputArr.map(input => input.split("\n")));
