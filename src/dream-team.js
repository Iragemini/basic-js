const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //console.log(`members = ${members}`);

  let result = "";
  let firstLetterArr = [];

  if(Array.isArray(members) === false || members.length === 0){
    return false;
  }

  const filterMembers = members.filter(member => typeof member === 'string');
  if(filterMembers.length === 0){
    return false;
  }

  filterMembers.forEach(element => {
    let firstLetter = element.trim()[0].toUpperCase();
    firstLetterArr.push(firstLetter);
  });
  firstLetterArr.sort();
  for(let i = 0; i < firstLetterArr.length; i ++){
    result += firstLetterArr[i];
  }  
  return result;

};
