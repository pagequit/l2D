import type { Point } from "./Point";

export type Segment = {
  p: Vector;
  q: Vector;
};

export function intersect(a: Segment, b: Segment): Vector {
  return {
    x: 0,
    y: 0,
  };
}
