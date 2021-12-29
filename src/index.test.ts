import { returnTwo, returnThree } from "./index";
import { utils } from "@test";
import { returnFour } from "@test/utils";

test("works", () => {
  expect(null).toBeNull();
});

test("returns 2", () => {
  expect(returnTwo()).toBe(2);
});

test("returns 3", () => {
  expect(returnThree()).toBe(3);
});

test("returns 4", () => {
  expect(utils.returnFour()).toBe(4);
  expect(returnFour()).toBe(4);
});
