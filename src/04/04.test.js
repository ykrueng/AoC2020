const { getInputArray } = require("../utility");
const { getValidPassportCount } = require("./task1");
const { getValidPassportCount2, validationMap } = require("./task2");

const testInput = getInputArray("04/test.txt", "string", "\n\n");
const validPassports = getInputArray("04/valid.txt", "string", "\n\n");
const invalidPassports = getInputArray("04/invalid.txt", "string", "\n\n");

const validFields = [
  ["byr:2002", true],
  ["byr:2003", false],
  ["hgt:60in", true],
  ["hgt:190cm", true],
  ["hgt:190in", false],
  ["hgt:190", false],
  ["hcl:#123abc", true],
  ["hcl:#123abz", false],
  ["hcl:123abc", false],
  ["ecl:brn", true],
  ["ecl:wat", false],
  ["pid:000000001", true],
  ["pid:0123456789", false],
];

describe("Day 1 tasks:", () => {
  test("method to count for valid passports", () => {
    expect(getValidPassportCount(testInput)).toEqual(2);
  });
  test("validation map", () => {
    for (let field of validFields) {
      const [k, v] = field[0].split(':');
      const isValid = validationMap[k](v);
      expect(isValid).toEqual(field[1])
    }
  })
  test("method to count for valid passports with validation", () => {
    expect(getValidPassportCount2(validPassports)).toEqual(4);
    expect(getValidPassportCount2(invalidPassports)).toEqual(0);
  });
});
