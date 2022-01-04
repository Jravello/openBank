export const fromDateToEpoch = (date: Date): number => {
  const div = 1000;
  const epoch = Math.floor(date.getTime() / div);
  return epoch;
};
