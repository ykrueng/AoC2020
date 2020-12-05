const { getInputArray } = require("../utility");
const { getHighestId } = require("./task1");
const { getYourId } = require("./task2");

const inputArr = getInputArray("05/input.txt", "string");

const notAvailable = () => "Not yet available";

exports.day05part1 = () => getHighestId(inputArr);
exports.day05part2 = () => getYourId(inputArr);
