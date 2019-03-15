
// O(n) | O(n) space
function twoNumberSum(array, targetSum) {
  const store = new Set();
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const possibleResult = targetSum - current;

    if (store.has(possibleResult)) {
      return [possibleResult, current].sort((a, b) => a - b);
    }

    store.add(current);
  }
  return [];
}

// O(n) | O(1) space
// function twoNumberSum(array, targetSum) {
//   const sort = (a, b) => a - b;
//   const sorted = array.sort(sort);
//   let left = 0;
//   let right = sorted.length;
// }

console.log(twoNumberSum([1,2,3,7,-4,-1], 2));

module.exports = twoNumberSum;

