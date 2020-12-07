const { getInputArray } = require("../utility");
const { getBagCount } = require("./task1");
const { getContentCount } = require("./task2");

const inputArr = getInputArray("07/input.txt", "string");

exports.day07part1 = () => getBagCount(inputArr);
exports.day07part2 = () => getContentCount(inputArr);
