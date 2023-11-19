import type { Vector } from "../entities/Vector";

export default function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function lerpVector(a: Vector, b: Vector, t: number): Vector {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
  };
}
