const dnaToRna = (str) => {
  let result = "";
  if (str === "") {
    return str;
  }
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "G") {
      result += "C";
    } else if (str[i] === "C") {
      result += "G";
    } else if (str[i] === "T") {
      result += "A";
    } else if (str[i] === "A") {
      result += "U";
    } else return null;
  }
  return result;
};
export default dnaToRna;
