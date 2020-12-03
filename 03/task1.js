exports.getTreeCount = (inputArr) => {
  if (!inputArr || !inputArr.length) return 0;

  const columnCount = inputArr[0].length;
  const rowCount = inputArr.length;

  let currentColumn = 0;
  let currentRow = 0;
  let treeCount = 0;

  while (currentRow < rowCount - 1) {
    currentColumn = (currentColumn + 3) % columnCount;
    currentRow++;

    if (inputArr[currentRow][currentColumn] === "#") treeCount++;
  }

  return treeCount;
};
