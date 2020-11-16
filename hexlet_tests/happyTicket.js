const isHappyTicket = (str) => {
  let resultLeft = 0;
  for (let i = 0; i < str.length / 2; i += 1) {
    resultLeft += Number(str[i]);
  }
  let resultRight = 0;
  for (let y = str.length - 1; y >= str.length / 2; y -= 1) {
    resultRight += Number(str[y]);
  }
  if (resultLeft === resultRight) {
    return true;
  }
  return false;
};
export default isHappyTicket;
