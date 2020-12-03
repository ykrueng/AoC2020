exports.getTreeCount = (inputArr, right = 3, down = 1) => {
  if (!inputArr || !inputArr.length) return 0;

  const columnCount = inputArr[0].length;
  const rowCount = inputArr.length;

  let currentColumn = 0;
  let currentRow = 0;
  let treeCount = 0;

  while (currentRow < rowCount - 1) {
    currentColumn = (currentColumn + right) % columnCount;
    currentRow += down;

    if (inputArr[currentRow][currentColumn] === "#") treeCount++;
  }

  return treeCount;
};
