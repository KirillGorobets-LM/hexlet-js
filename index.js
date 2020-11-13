const diff = (a, b) => {
 const firstDiff = b - a;
 const secondDiff = (360 - b) + a;
 if ( firstDiff > secondDiff) {
     return secondDiff;
 }
 return firstDiff;
};
diff();