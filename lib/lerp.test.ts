import { expect, test } from "bun:test";
import lerp, { lerpVector } from "./lerp";

test("lerp", function () {
  expect(lerp(0, 10, 0.5)).toBe(5);
});

test("lerpVector", function () {
  expect(lerpVector({ x: 0, y: 0 }, { x: 10, y: 10 }, 0.5)).toEqual({
    x: 5,
    y: 5,
  });
});
