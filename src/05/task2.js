const { getId } = require("./task1");

exports.getYourId = (inputArr) =>
  inputArr
    .map((input) => getId(input))
    .sort((id1, id2) => id1 - id2)
    .reduce(
      (yourSeat, seat, i, seats) =>
        i && seat - seats[i - 1] === 2 ? seat - 1 : yourSeat,
      null
    );
