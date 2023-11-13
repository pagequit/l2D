export default class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get direction() {
    return Math.atan2(this.y, this.x);
  }

  get magnitude() {
    return Math.hypot(this.x, this.y);
  }

  add(other: Vector) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  dot(other: Vector) {
    return this.x * other.x + this.y * other.y;
  }

  normalize() {
    return this.scale(1 / this.magnitude);
  }

  scale(scalar: number) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  subtract(other: Vector) {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  static fromPolar(magnitude: number, direction: number) {
    return new Vector(
      magnitude * Math.cos(direction),
      magnitude * Math.sin(direction),
    );
  }
}
