const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);

  else console.log(`❌❌❌ Assertion Failed: ${array1} is not equal to ${array2}`);
};
const middle = function(array) {
  let result = [];

  if (array.length < 3) {
    console.log(result, 'result is');
    return result;
  } else if (array.length % 2 === 0) {
    let middleIndex = array.length / 2 - 1;
    result.push(array[middleIndex]);
    result.push(array[middleIndex + 1]);
  } else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2);
    result.push(array[middleIndex]);
  }
  return result;
};

