export type Angle = {
  radians: number;
};

export function toDegrees(angle: Angle): number {
  return angle.radians * (180 / Math.PI);
}

export function fromDegrees(degrees: number): Angle {
  return { radians: (degrees / 180) * Math.PI };
}

export function toTurns(angle: Angle): number {
  return angle.radians / (2 * Math.PI);
}

export function fromTurns(turns: number): Angle {
  return { radians: turns * (2 * Math.PI) };
}

export default {
  toDegrees,
  fromDegrees,
  toTurns,
  fromTurns,
};
