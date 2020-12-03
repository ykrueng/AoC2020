const { processInput } = require("./task1");

function validatePassword({ hi, lo, char, password }) {
  return (
    (password[hi-1] === char || password[lo-1] === char) &&
    !(password[hi-1] === char && password[lo-1] === char)
  );
}

exports.getValidPasswordCount2 = (inputArr) => {
  let validPasswordCount = 0;

  for (let input of inputArr) {
    const passwordSetting = processInput(input);
    const isValidPassword = validatePassword(passwordSetting);

    if (isValidPassword) validPasswordCount++;
  }

  return validPasswordCount;
};
