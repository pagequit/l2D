import { expect, test } from "bun:test";
import lerp from "./lerp";

test("lerp", () => {
  expect(lerp(0, 10, 0.5)).toBe(5);
});
