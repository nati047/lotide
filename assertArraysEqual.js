const eqArrays = require('./eqArrays');
const assertArraysEqual = function(array1, array2){
  if(eqArrays(array1, array2) === true) console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);
 
  else console.log(`❌❌❌ Assertion Failed: ${array1} is not equal to ${array2}`);
}
module.exports = assertArraysEqual;
