import { describe, expect, test } from "bun:test";
import Vector from "./Vector";

describe("Vector", () => {
  test("constructor", () => {
    const v = new Vector(1, 2);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
  });
});
