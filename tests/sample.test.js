const { add, subtract } = require("../index");

test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test("subtracts numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(0, 4)).toBe(-4);
});

