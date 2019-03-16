
// O(n) | O(1) space
function twoNumberSum(array, targetSum) {
  const sort = (a, b) => a - b;
  const sorted = array.sort(sort);
  let left = 0;
  let right = sorted.length - 1;

  while (left < right)  {
    const sum = array[left] + array[right];

    if (sum === targetSum) {
      return [array[left], array[right]];
    } else if (sum < targetSum) {
      left++;
    } else if (sum > targetSum) {
      right--;
    }
  }

  return  [];
}

module.exports = twoNumberSum;
