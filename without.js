const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
  }
  return true;
}
const assertArraysEquals = function (array1, array2) {
  if (eqArrays(array1, array2) === true) console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);

  else console.log(`❌❌❌ Assertion Failed: ${array1} is not equal to ${array2}`);
}

const without = function (source, itemsToRemove) {
  let final = [];
  for (element of source) final.push(element);

  for (let element of itemsToRemove) {
    for (let i = 0; i < final.length; i++) {
      if (element === final[i]) final.splice(i, 1);
    }
  }
  return final;
}

module.exports = without;






