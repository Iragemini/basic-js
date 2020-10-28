const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  let result = "";

  if(typeof sampleActivity !== "string" || !sampleActivity){
    return false;
  }
  if(sampleActivity === "undefined" || sampleActivity === null || sampleActivity === ""){
    return false;
  }
  if(Number.isNaN(Number.parseInt(sampleActivity))){
    return false;
  }

  const SAMPLE_ACTIVITY = Number.parseInt(sampleActivity);

  if(SAMPLE_ACTIVITY > MODERN_ACTIVITY || SAMPLE_ACTIVITY <= 0){
    return false;
  }

  const k = 0.693/HALF_LIFE_PERIOD;

  const t = Number.parseInt(Math.log(SAMPLE_ACTIVITY/MODERN_ACTIVITY)/k);

  return t;
};
