exports.getContentCount = (inputArr) => {
  const bagsMap = inputArr.reduce((map, input) => {
    const rule = input.split(/ bags? contain /);
    return map.set(rule[0], rule[1]);
  }, new Map());

  const getContentCount = (color = "shiny gold") =>
    color === "no content"
      ? 1
      : bagsMap
          .get(color)
          ?.split(/ bags?\,?\s?\.?/)
          .reduce(
            (sum, bag) =>
              !parseInt(bag)
                ? sum
                : sum +
                  (parseInt(bag)) *
                    getContentCount(bag.replace(parseInt(bag), "").trim()),
            1
          );

  return getContentCount() - 1;
};
