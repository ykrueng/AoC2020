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

const validate = (fieldsMap) =>
  Object.keys(validationMap).every((vK) =>
    validationMap[vK](fieldsMap.get(vK))
  );

const validateNumbers = (min, max) => (v) =>
  parseInt(v) >= min && parseInt(v) <= max;

const validationMap = {
  byr: validateNumbers(1920, 2002),
  iyr: validateNumbers(2010, 2020),
  eyr: validateNumbers(2020, 2030),
  hgt: (v) =>
    (v?.endsWith("cm") && validateNumbers(150, 193)(v)) ||
    (v?.endsWith("in") && validateNumbers(59, 76)(v)),
  hcl: (v) => Boolean(v?.match(/^#[0-9a-f]{6}/)),
  ecl: (v) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(v),
  pid: (v) => Boolean(v?.match(/^\d{9}$/)),
};

exports.validationMap = validationMap;
