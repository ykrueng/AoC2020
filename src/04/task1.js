exports.getValidPassportCount = (inputArr) =>
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
      if (requiredFields.has(key)) {
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
