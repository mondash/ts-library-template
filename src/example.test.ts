import { returnTwo } from "./index";

test("works", () => {
  expect(null).toBeNull();
});

test("returns 2", () => {
  expect(returnTwo()).toEqual(2);
});
