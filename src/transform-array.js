const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {

  //console.log(`array = ${arr}`);

  if(!Array.isArray(arr)){
    throw new Error ("not array");
  }

  if(arr.length === 0){
    return arr;
  }

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if(item === '--discard-next'){
      if(arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
        i += 2;
      } else i++;
      continue;
    }
    if(item === '--discard-prev'){
      if(i > 0){
       newArr.pop();
      }
      continue;
    }
    if(item === '--double-next'){
      if(i < arr.length - 1){
        newArr.push(arr[i+1]);
      }
      continue;
    }
    if(item === '--double-prev'){
      if(i > 0){
        newArr.push(arr[i-1]);
      }
      continue;
    }
    newArr.push(item);
  }
  //console.log(`newArr = ${newArr}`);

  return newArr;
};
