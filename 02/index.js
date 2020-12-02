const { getValidPasswordCount } = require("./task1");
const { getInputArray } = require("../utility");

const inputArr = getInputArray("02/input.txt", "string");

exports.day02part1 = () => getValidPasswordCount(inputArr);
