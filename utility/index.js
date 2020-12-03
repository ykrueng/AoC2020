const fs = require("fs");
const path = require("path");
const prompts = require("prompts");

const conversionMap = new Map([["integer", parseInt]]);

exports.getInputString = (relPath) => {
  // read the input file
  const inputStr = fs.readFileSync(
    path.join(__dirname, `../${relPath}`),
    "utf-8"
  );

  return inputStr;
};

exports.getInputArray = (relPath, type = "integer", separator = "\n") => {
  // read the input file
  const inputStr = this.getInputString(relPath);
  // convert input string into array
  const inputArr = inputStr.split(separator);

  return type === "string"
    ? inputArr
    : inputArr.map((input) => conversionMap.get(type)(input));
};

exports.getUserInput = async () => {
  const questions = [
    {
      type: "number",
      name: "day",
      message: "Day: ",
    },
    {
      type: "number",
      name: "task",
      message: "Task: ",
    },
  ];

  let { day, task } = await prompts(questions).catch((err) => ({}));

  if (!day || day < 0 || day > 31) day = 1;
  if (!task || task < 0 || task > 2) task = 1;

  return `${day < 10 ? "0" : ""}${day}0${task}`;
};

exports.YEAR = 2020;
