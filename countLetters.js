const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let count = {};
  for (let letter of string) {
    if (letter === ' ') continue;
    else if (count[letter]) {
      count[letter] += 1;
    } else count[letter] = 1;
  }
  return count;

};
