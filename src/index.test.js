import { calculate } from "./index";

describe("calculate", () => {
  it("Returns 9 for given inputs", () => {
    const inputs = [
      [2, 5],
      [4, 8],
      [10, 13],
    ];

    expect(calculate(inputs)).toEqual(9);
  });

  it("Returns 34 for given inputs", () => {
    const inputs = [
      [36, 40],
      [8, 9],
      [19, 21],
      [6, 23],
      [1, 5],
      [10, 12],
      [14, 18],
      [27, 31],
      [12, 16],
      [33, 34],
      [41, 45],
    ];

    expect(calculate(inputs)).toEqual(34);
  });
});