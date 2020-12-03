const { getTreeCount } = require("./task1");
const { getTreeProduct } = require("./task2");
const { inputArr } = require("./index");

const testInput = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

describe("Day 1 tasks:", () => {
  test("method to get the count of trees", () => {
    expect(getTreeCount(testInput)).toEqual(7);
    expect(getTreeCount(inputArr)).toEqual(173);
  });
  test("method to get the product of trees on the slopes", () => {
    expect(getTreeProduct(testInput)).toEqual(336);
    expect(getTreeProduct(inputArr)).toEqual(4385176320);
  });
});
