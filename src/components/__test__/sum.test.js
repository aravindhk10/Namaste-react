import { sum } from "../sum";

test("test if sum function works, should return the summation of two numbers", () => {
  const res = sum(1, 2);
  expect(res).toBe(3); // assertion
});
