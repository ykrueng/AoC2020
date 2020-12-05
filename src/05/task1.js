exports.getHighestId = (inputArr) =>
  inputArr
    .map((input) => getId(input))
    .reduce((highestId, id) => (highestId > id ? highestId : id), -Infinity);

const getId = (str) =>
  getSpot(str.slice(0, 7)) * 8 + getSpot(str.slice(7), 0, 7);

function getSpot(seats, lo = 0, hi = 127, i = 0) {
  return i === seats.length
    ? lo
    : getSpot(
        seats,
        seats[i] === "B" || seats[i] === "R" ? Math.ceil((lo + hi) / 2) : lo,
        seats[i] === "F" || seats[i] === "L" ? Math.floor((lo + hi) / 2) : hi,
        i + 1
      );
}

exports.getId = getId;
