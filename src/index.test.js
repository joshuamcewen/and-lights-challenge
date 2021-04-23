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
});