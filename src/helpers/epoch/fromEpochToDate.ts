export const fromEpochToDate = (epoch: number): Date => {
  const div = 1000;
  const date = new Date(epoch * div);
  return date;
};
