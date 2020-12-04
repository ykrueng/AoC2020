exports.getValidPassportCount2 = (inputArr) =>
  inputArr.reduce((sum, str) => (sum += validate(str)), 0);

function validate(str) {
  const fields = str.split(/\s/);
  const requiredFields = new Set([
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
  ]);
  let optionalField = "cid";

  for (let field of fields) {
    const [key, value] = field.split(":");
    if (value) {
      if (requiredFields.has(key) && validationMap[key](value)) {
        requiredFields.delete(key);
      } else if (key === optionalField) {
        optionalField = null;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return requiredFields.size === 0;
}

const validationMap = {
  byr: (value) => {
    value = parseInt(value);
    return value >= 1920 && value <= 2002;
  },
  iyr: (value) => {
    value = parseInt(value);
    return value >= 2010 && value <= 2020;
  },
  eyr: (value) => {
    value = parseInt(value);
    return value >= 2020 && value <= 2030;
  },
  hgt: (value) => {
    const height = parseInt(value);
    if (value.endsWith('cm')) {
      return height >= 150 && height <= 193;
    }
    if (value.endsWith('in')) {
      return height >= 59 && height <= 76;
    }
    return false
  },
  hcl: (value) => Boolean(value.match(/^#[0-9a-f]{6}/)),
  ecl: (value) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value),
  pid: (value) => Boolean(value.match(/^\d{9}$/)),
};

exports.validationMap = validationMap;