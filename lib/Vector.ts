import type { Angle } from "./Angle";

export type Vector = {
  x: number;
  y: number;
};

export const direction = ({ x, y }: Vector): Angle => ({
  radians: Math.atan2(y, x),
});

export const magnitude = ({ x, y }: Vector): number => Math.hypot(x, y);

export const sum = (a: Vector, b: Vector): Vector => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

export const diff = (a: Vector, b: Vector): Vector => ({
  x: a.x - b.x,
  y: a.y - b.y,
});

export const scale = ({ x, y }: Vector, scalar: number): Vector => ({
  x: x * scalar,
  y: y * scalar,
});

export const normalize = (v: Vector): Vector => scale(v, 1 / magnitude(v));

export const dot = (a: Vector, b: Vector): number => a.x * b.x + a.y * b.y;

export const fromPolar = (magnitude: number, direction: number): Vector => ({
  x: magnitude * Math.cos(direction),
  y: magnitude * Math.sin(direction),
});

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
