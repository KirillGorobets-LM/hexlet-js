const sumSquareDifference = (num) => {
  const sumOfSquares = () => {
    let result = 0;
    for (let i = 0; i <= num; i += 1) {
      result += i ** 2;
    }
    return result;
  };
  const squareOfSum = () => {
    let result = 0;
    for (let i = 0; i <= num; i += 1) {
      result += i;
    }
    return result ** 2;
  };
  const x = squareOfSum(num) - sumOfSquares(num);
  return x;
};
export default sumSquareDifference;
