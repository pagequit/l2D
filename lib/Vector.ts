export type Vector = {
  x: number;
  y: number;
};

export default {
  direction: ({ x, y }: Vector): number => Math.atan2(x, y),
  magnitude: ({ x, y }: Vector): number => Math.hypot(x, y),
  sum: (a: Vector, b: Vector): Vector => ({
    x: a.x + b.x,
    y: a.y + b.y,
  }),
  diff: (a: Vector, b: Vector): Vector => ({
    x: a.x - b.x,
    y: a.y - b.y,
  }),
  scale: ({ x, y }: Vector, scalar: number): Vector => ({
    x: x * scalar,
    y: y * scalar,
  }),
  dot: (a: Vector, b: Vector): number => a.x * b.x + a.y * b.y,
  fromPolar: (magnitude: number, direction: number): Vector => ({
    x: magnitude * Math.sin(direction),
    y: magnitude * Math.cos(direction),
  }),
};
