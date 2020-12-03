const { AoC2020 } = require("./utility/helper");
const { getUserInput } = require("./utility");

function main() {
  console.log(`Welcome to Advent of Code 2020`);
  console.log(`==============================`);
  console.log(``);

  getUserInput().then((input) => {
    const task = AoC2020[input];
    console.log(``);
    console.log(`Expected: ${task.answer}`);
    console.table(`Received: ${task.func()}`);
  });
}

main();
