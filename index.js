const prompts = require("prompts");

const { day01part1 } = require("./01");
const AoC2020 = {
  "0101": {
    func: day01part1,
    answer: 988771
  },
};

async function getUserInput() {
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
}

function main() {
  console.log(`Welcome to Advent of Code 2020`);
  console.log(`==============================`);
  console.log(``);

  getUserInput().then(input => {
    const task = AoC2020[input];
    console.log(`Expected: ${task.func()}`); 
    console.table(`Received: ${task.answer}`);
  })

}

main();
