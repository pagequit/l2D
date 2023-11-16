import { expect, test } from "bun:test";
import V, { Vector } from "./Vector";

test("direction", function () {
  expect(V.direction({ x: 1, y: 2 })).toBe(Math.atan2(2, 1));
});

test("magnitude", function () {
  expect(V.magnitude({ x: 1, y: 2 })).toBe(Math.hypot(1, 2));
});

test("sum", function () {
  expect(V.sum({ x: 1, y: 2 }, { x: 2, y: 3 })).toEqual({ x: 3, y: 5 });
});

test("diff", function () {
  expect(V.diff({ x: 1, y: 2 }, { x: 2, y: 3 })).toEqual({ x: -1, y: -1 });
});

test("scale", function () {
  expect(V.scale({ x: 1, y: 2 }, 3)).toEqual({ x: 3, y: 6 });
});

test("dot", function () {
  expect(V.dot({ x: 1, y: 2 }, { x: 2, y: 3 })).toBe(8);
});

test("fromPolar", function () {
  const v: Vector = { x: 1, y: 2 };
  const { x, y } = V.fromPolar(V.magnitude(v), V.direction(v));

  expect(Math.abs(x - v.x)).toBeLessThanOrEqual(Number.EPSILON);
  expect(Math.abs(y - v.y)).toBeLessThanOrEqual(Number.EPSILON);
});
