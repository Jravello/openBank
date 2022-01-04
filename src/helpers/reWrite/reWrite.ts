export const reWrite = (secretKey: string) => {
  return secretKey.split('').reverse().join('');
};
