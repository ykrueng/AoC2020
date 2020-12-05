const { getInputArray } = require("../utility");
const { getId, getHighestId } = require("./task1");
const { getYourId } = require("./task2");

const inputArr = getInputArray("05/input.txt", "string");

const testInput = [
  ["FBFBBFFRLR", 357],
  ["BFFFBBFRRR", 567],
  ["FFFBBBFRRR", 119],
  ["BBFFBBFRLL", 820],
];

describe("Day 1 tasks:", () => {
  test("method to get seat ID", () => {
    for (let input of testInput) {
      expect(getId(input[0])).toEqual(input[1]);
    }
  });
  test("method to get highest seat Id", () => {
    expect(getHighestId(testInput.map((input) => input[0]))).toEqual(820);
    expect(getHighestId(inputArr)).toEqual(864);
  });
  test("method to get your seat Id", () => {
    expect(getYourId(inputArr)).toEqual(739);
  });
});
