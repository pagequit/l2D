export type Point = {
  x: number;
  y: number;
};

export type Vector = Point;
const a: Point = {
  x: 0,
  y: 0,
} as Vector;

export type Segment = {
  a: Point;
  b: Point;
};

export type Distance = number;

export type Radians = number;

export type Turns = number;

export type Angle = Radians | Turns;
