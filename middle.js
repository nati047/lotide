const middle = function(array) {
  let result = [];

  if (array.length < 3) {
    
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

module.exports = middle;