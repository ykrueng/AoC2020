const { get2020PairProduct } = require("./task1");
const { get2020TripletProduct } = require("./task2");

const inputArr = [1721, 979, 366, 299, 675, 1456];

describe("Day 1 tasks:", () => {
  test('method to get a product of 2020 pair', () => {
    expect(get2020PairProduct(inputArr)).toEqual(514579);
  })

  test('method to get a product of 2020 triplet', () => {
    expect(get2020TripletProduct(inputArr)).toEqual(241861950);
  })
})