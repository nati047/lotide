const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length === Object.keys(object2).length) {
    
    for(let key in object1){
      
      
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
      
        if(eqArrays(object1[key], object2[key]) === false) return false;
      }
      
      else if(object1[key] !== object2[key]) return false;
    }
    
  }
  return true;
  
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual( eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const cdt = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// assertEqual( eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual( eqObjects(cd, cd2), false);
// assertEqual( eqObjects(cd, cdt), true);

module.exports = eqObjects;