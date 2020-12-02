const { getValidPasswordCount } = require("./task1");

const inputArr = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

describe("Day 1 tasks:", () => {
  test("method to get the count of valid passwords", () => {
    expect(getValidPasswordCount(inputArr)).toEqual(2);
  });
});
