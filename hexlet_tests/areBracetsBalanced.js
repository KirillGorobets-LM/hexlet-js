const areBracetsBalsnced = (str) => {
  if (str[0] !== "(" && str[str.length - 1] !== ")") {
    return false;
  }
  let acc = 0;
  for (let i = 0; i < str.length; i += 1) {
      if (str[i] === '(') {
          acc += 1
      } else if (str[i] === ')') {
          acc -= 1
      } 
      if (acc < 0) {
          return false;
      }
  } 
  if (acc === 0) {
      return true;
  } 
  return false;
};
export default areBracetsBalsnced;
