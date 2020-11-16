const withoutTwoZeros = (zeros, ones) => {
  if (zeros > ones + 1) {
      return 0;
  };
  const fact = (num) => {
      if (num === 0) {
          return 1;
      } 
          return num * fact(num-1);   
  };
  const n = ones + 1;
  const k = zeros;
  const result = fact(n)/(fact(k)*fact(n-k));
  return result;
};
export default withoutTwoZeros;