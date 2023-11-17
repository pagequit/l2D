import type { Angle } from "./Angle";

export type Vector = {
  x: number;
  y: number;
};

export function direction({ x, y }: Vector): Angle {
  return { radians: Math.atan2(y, x) };
}

export function magnitude({ x, y }: Vector): number {
  return Math.hypot(x, y);
}

export function sum(a: Vector, b: Vector): Vector {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}

export function diff(a: Vector, b: Vector): Vector {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  };
}

export function scale({ x, y }: Vector, scalar: number): Vector {
  return {
    x: x * scalar,
    y: y * scalar,
  };
}

export function normalize(v: Vector): Vector {
  return scale(v, 1 / magnitude(v));
}

export function dot(a: Vector, b: Vector): number {
  return a.x * b.x + a.y * b.y;
}

export function fromPolar(magnitude: number, direction: number): Vector {
  return {
    x: magnitude * Math.cos(direction),
    y: magnitude * Math.sin(direction),
  };
}

export default {
  direction,
  magnitude,
  sum,
  diff,
  scale,
  normalize,
  dot,
  fromPolar,
};
