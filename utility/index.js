const fs = require("fs");
const path = require("path");

const conversionMap = new Map([["integer", parseInt]]);

exports.getInputString = (relPath) => {
  // read the input file
  const inputStr = fs.readFileSync(
    path.join(__dirname, `../${relPath}`),
    "utf-8"
  );

  return inputStr;
};

exports.getInputArray = (relPath, separator = "\n", type = "integer") => {
  // read the input file
  const inputStr = this.getInputString(relPath);
  // convert input string into array
  const inputArr = inputStr.split(separator);

  return type === "string"
    ? inputArr
    : inputArr.map((input) => conversionMap.get(type)(input));
};
