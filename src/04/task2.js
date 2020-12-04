exports.getValidPassportCount2 = (inputArr) =>
  inputArr.reduce(
    (sum, str) =>
      (sum += validate(
        str
          .split(/\s/)
          .map((strKV) => strKV.split(":"))
          .reduce((obj, [k, v]) => obj.set(k, v), new Map())
      )),
    0
  );

const validate = (fieldsMap) => {
  return Object.keys(validationMap).reduce(
    (isValid, vK) => isValid && validationMap[vK](fieldsMap.get(vK)),
    true
  );
};

const validateNumbers = (min, max) => (number) =>
  parseInt(number) >= min && parseInt(number) <= max;

const validationMap = {
  byr: validateNumbers(1920, 2002),
  iyr: validateNumbers(2010, 2020),
  eyr: validateNumbers(2020, 2030),
  hgt: (value) =>
    value.endsWith("cm")
      ? validateNumbers(150, 193)(value)
      : value.endsWith("in")
      ? validateNumbers(59, 76)(value)
      : false,
  hcl: (value) => Boolean(value.match(/^#[0-9a-f]{6}/)),
  ecl: (value) =>
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value),
  pid: (value) => Boolean(value.match(/^\d{9}$/)),
};

exports.validationMap = validationMap;
