import { expect, test } from "bun:test";
import A from "./Angle";

test("toDegrees", function () {
  expect(A.toDegrees({ radians: Math.PI * 2 })).toBe(360);
  expect(A.toDegrees({ radians: Math.PI })).toBe(180);
  expect(A.toDegrees({ radians: Math.PI / 2 })).toBe(90);
  expect(A.toDegrees({ radians: 0 })).toBe(0);
});

test("fromDegrees", function () {
  expect(A.fromDegrees(360)).toEqual({ radians: Math.PI * 2 });
  expect(A.fromDegrees(180)).toEqual({ radians: Math.PI });
  expect(A.fromDegrees(90)).toEqual({ radians: Math.PI / 2 });
  expect(A.fromDegrees(0)).toEqual({ radians: 0 });
});

test("toTurns", function () {
  expect(A.toTurns({ radians: Math.PI * 2 })).toBe(1);
  expect(A.toTurns({ radians: Math.PI })).toBe(0.5);
  expect(A.toTurns({ radians: Math.PI / 2 })).toBe(0.25);
  expect(A.toTurns({ radians: 0 })).toBe(0);
});

test("toTurns", function () {
  expect(A.fromTurns(1)).toEqual({ radians: Math.PI * 2 });
  expect(A.fromTurns(0.5)).toEqual({ radians: Math.PI });
  expect(A.fromTurns(0.25)).toEqual({ radians: Math.PI / 2 });
  expect(A.fromTurns(0)).toEqual({ radians: 0 });
});
