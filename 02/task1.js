function processInput(string) {
  const input = string.split(" ");
  const loHi = input[0].split("-").map((n) => Number(n));
  const char = input[1].slice(0, -1);

  return {
    lo: loHi[0],
    hi: loHi[1],
    char,
    password: input[2],
  };
}

function validatePassword({lo, hi, char, password}) {
  let occurance = 0;

  for (let passwordChar of password) {
    if (passwordChar === char) {
      occurance++;
    }
    if (occurance > hi) return false
  }

  if (occurance < lo) return false
  return true
}

exports.getValidPasswordCount = (inputArr) => {
  let validPasswordCount = 0;

  for (let input of inputArr) {
    const passwordSetting = processInput(input);
    const isValidPassword = validatePassword(passwordSetting);

    if (isValidPassword) validPasswordCount++;
  }

  return validPasswordCount;
};
