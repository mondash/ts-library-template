import { returnTwo, returnThree } from "./index";
import { utils } from "@test";
import { returnFour } from "@test/utils";

test("works", () => {
  expect(null).toBeNull();
});

test("returns 2", () => {
  expect(returnTwo()).toEqual(2);
});

test("returns 3", () => {
  expect(returnThree()).toEqual(3);
});

test("returns 4", () => {
  expect(utils.returnFour()).toEqual(4);
  expect(returnFour()).toEqual(4);
});
