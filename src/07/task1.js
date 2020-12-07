exports.getBagCount = (inputArr) => {
  const counter = new Set();
  getCount();

  function getCount(color = "shiny gold") {
    for (let rule of inputArr) {
      const container = rule.split(/ bags? contain /)[0];
      if (rule.includes(` ${color}`) && !counter.has(container)) {
        counter.add(container);
        getCount(container);
      }
    }
  }
  
  return counter.size;
};
