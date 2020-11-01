const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {

  /* from Wikipedia: минимальное число ходов, 
  необходимое для решения головоломки, 
  равно (2 в степени n) − 1, где n — число дисков */

  const turns = Math.pow(2, disksNumber) -1;
  const turnsSpeedInSec = turnsSpeed / 3600;
  const seconds = turns / turnsSpeedInSec;

  return {'turns' : turns, 'seconds' : Math.floor(seconds)}
};
