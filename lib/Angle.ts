export type Angle = {
  radians: number;
};

export const toDegrees = (a: Angle): number => a.radians * (180 / Math.PI);

export const normalize = (a: Angle): number => a.radians % (2 * Math.PI);

export default {
  toDegrees,
  normalize,
};
