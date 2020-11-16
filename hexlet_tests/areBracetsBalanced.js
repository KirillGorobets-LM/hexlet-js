const areBracetsBalsnced = (str) => {
  if (str[0] !== "(" && str[str.length - 1] !== ")") {
    return false;
  }
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "(") {
      cnt1 += 1;
    } else if (str[i] === ")") {
      cnt2 += 1;
    }
  }
  if (cnt1 === cnt2) {
    return true;
  }
  return false;
};
export default areBracetsBalsnced;
