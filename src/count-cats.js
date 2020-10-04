const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let count = 0;
  const str = '^^';

  if(Array.isArray(matrix) === false || matrix.length === 0){
    return 0;
  }

  for(let i = 0; i < matrix.length; i++){
    if(Array.isArray(matrix[i]) === false) continue;
    
    if(matrix[i].includes(str)){
      var arr = matrix[i];

      for(let j = 0; j < arr.length; j++){
        var elem = arr[j];

        if(typeof elem !== 'string' || elem.length === 0) continue;

        if(elem.indexOf(str) >= 0 && (elem === str)){
          count ++;
        }
      }
    }
  }

  return count
};
