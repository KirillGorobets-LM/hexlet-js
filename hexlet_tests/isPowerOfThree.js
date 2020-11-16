const isPowerOfThree = (num) => {
  let result = 1;
  while (result < num) {
    result *= 3;
  }
  if (result === num) {
    return true;
  }
  return false;
};
export default isPowerOfThree;
