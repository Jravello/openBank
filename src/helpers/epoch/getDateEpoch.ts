export const getDateEpoch = (): number => {
  const div = 1000.0;
  const epoch = Math.floor(new Date().getTime() / div);
  return epoch;
};
