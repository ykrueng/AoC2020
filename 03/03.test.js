const { getTreeCount } = require("./task1");

const inputArr = [
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
    expect(getTreeCount(inputArr)).toEqual(7);
  });
});
