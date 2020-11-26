const reverse = (str) => {
   if (str === '') {
    return '';
}
    let result = str[str.length - 1];
   if (str.length > 1) {
       result += reverse(str.slice(0, str.length - 1))    
   }
   return result;
};
export default reverse;