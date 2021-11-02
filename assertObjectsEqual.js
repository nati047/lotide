const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {

    for (let key in object1) {


      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

        if (eqObjects(object1[key], object2[key]) === false) return false;
      } else if (object1[key] !== object2[key]) return false;
    }

  }
  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} is equal to ${inspect(expected)}`);

  else console.log(`❌❌❌ Assertion Failed: ${inspect(actual)}is not equal to ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;