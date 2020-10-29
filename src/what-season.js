const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date !== undefined) {
    if(!date.hasOwnProperty('getDay')) {
      let month = date.getMonth(); 
      if( month === 0 || month === 1 || month === 11){
        return 'winter';
      } else if ( month > 1 && month < 5) {
        return 'spring';
      } else if ( month > 4 && month < 8) {
        return 'summer';
      } else {
        return 'autumn';
      } 
  } else {
    throw 'Error';
  }
} else {
  return 'Unable to determine the time of year!';
}
};
