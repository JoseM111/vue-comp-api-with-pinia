// constants.ts

export const periods: readonly [string, string, string] = [
  'Today',
  'This Week',
  'This Month',
] as const;

// custom type
export type PeriodType = typeof periods[number];
