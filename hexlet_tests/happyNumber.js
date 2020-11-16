const isHappyNumber = (num) => {
  const squareOfNumbers = (x) => {
    let result = 0;
    const strnum = String(x);
    for (let i = 0; i < strnum.length; i += 1) {
      result += Number(strnum[i]) ** 2;
    }
    return result;
  };

  let result = squareOfNumbers(num);
  for (let i = 0; i < 10; i += 1) {
    if (result === 1) {
      return true;
    }
    result = squareOfNumbers(result);
  }
  return false;
};
export default isHappyNumber;
