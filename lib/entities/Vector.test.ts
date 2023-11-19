import { expect, test } from "bun:test";
import V, { Vector } from "./Vector";

test("direction", function () {
  expect(V.direction({ x: 1, y: 2 })).toEqual({ radians: Math.atan2(2, 1) });
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

test("normalize", function () {
  const v: Vector = { x: 3, y: 4 };
  const { x, y } = V.normalize(v);

  expect(Math.abs(x - 0.6)).toBeLessThanOrEqual(Number.EPSILON);
  expect(Math.abs(y - 0.8)).toBeLessThanOrEqual(Number.EPSILON);
});

test("dot", function () {
  expect(V.dot({ x: 1, y: 2 }, { x: 2, y: 3 })).toBe(8);
});

test("fromPolar", function () {
  const v: Vector = { x: 1, y: 2 };
  const { x, y } = V.fromPolar(V.magnitude(v), V.direction(v).radians);

  expect(Math.abs(x - 1)).toBeLessThanOrEqual(Number.EPSILON);
  expect(Math.abs(y - 2)).toBeLessThanOrEqual(Number.EPSILON);
});
