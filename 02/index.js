const { getValidPasswordCount } = require("./task1");
const { getValidPasswordCount2 } = require("./task2");
const { getInputArray } = require("../utility");

const inputArr = getInputArray("02/input.txt", "string");

exports.day02part1 = () => getValidPasswordCount(inputArr);
exports.day02part2 = () => getValidPasswordCount2(inputArr);
