export const calculate = (inputs) =>
  new Set(
    inputs
      .map(([start, end]) =>
        Array.from({ length: end - start }, (_, i) => i + start)
      )
      .flat()
  ).size;
