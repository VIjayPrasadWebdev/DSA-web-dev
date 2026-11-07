/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
const pickedNumber = 5;

function guess(num) {
  if (num > pickedNumber) return -1;
  if (num < pickedNumber) return 1;
  return 0;
}

function Test(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let res = guess(mid); // It is a demo api

    if (res < 0) {
      right = mid - 1;
    } else if (res > 0) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
}

console.log(Test(5));
