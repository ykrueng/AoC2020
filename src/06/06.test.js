const { getQuestionCount, getQuestionSum } = require("./task1");
const { getQuestionSum2 } = require("./task2");
const { getInputArray } = require("../utility");

const groupInput = ["abcx", "abcy", "abcz"];

const groups = [
  ["abc"],
  ["a", "b", "c"],
  ["ab", "ac"],
  ["a", "a", "a", "a"],
  ["b"],
];

const inputArr = getInputArray("06/input.txt", "string", "\n\n").map((input) =>
  input.split("\n")
);

describe("Day 1 tasks:", () => {
  test("test", () => {
    expect(getQuestionCount(groupInput)).toEqual(6);
    expect(getQuestionSum(groups)).toEqual(11);
    expect(getQuestionSum(inputArr)).toEqual(6768);
  });
  test("test", () => {
    // expect(getQuestionCount2(groupInput)).toEqual(3);
    expect(getQuestionSum2(groups)).toEqual(6);
    expect(getQuestionSum2(inputArr)).toEqual(3489);
  });
});
