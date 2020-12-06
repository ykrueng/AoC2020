const { getSpot } = require("./task1");

exports.getYourId = (inputArr) =>
  inputArr
    .map((str) => getSpot(str.slice(0, 7)) * 8 + getSpot(str.slice(7), 0, 7))
    .sort((id1, id2) => id1 - id2)
    .reduce(
      (yourSeat, seat, i, seats) =>
        i && seat - seats[i - 1] === 2 ? seat - 1 : yourSeat,
      null
    );
