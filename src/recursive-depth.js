const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {

    let i = 0;

    arr.forEach((elem) => {
      if(Array.isArray(elem)){
        let j = this.calculateDepth(elem);
        if(i < j) {
          i = j;
        }        
      }
    });    
    i +=1;
    return i;
  }
};