
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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
