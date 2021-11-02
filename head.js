const assertEqual = require('./assertEqual');
const head = function(array){
  let value = array[0];
  return value; 
}
module.exports = head;
console.log(head(["Hello", "Lighthouse", "Labs"]));