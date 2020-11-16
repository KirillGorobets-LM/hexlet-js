const reverseInt = (num) => {
  let result = "";
  const strnum = String(num);
  for (let i = strnum.length - 1; i >= 0; i -= 1) {
    if (strnum[i] !== "-") {
      result += strnum[i];
    }
  }
  if (num < 0) {
    return -Number(result);
  }
  return Number(result);
};
export default reverseInt;
