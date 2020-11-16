const annkerman = (m, n) => {
  let result = 0;
  if (m > 0 && n > 0) {
    result += annkerman(m - 1, annkerman(m, n - 1));
  } else if (m > 0 && n === 0) {
    result += annkerman(m - 1, 1);
  } else {
    result += n + 1;
  }
  return result;
};
export default annkerman;
