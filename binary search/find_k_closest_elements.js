function Test(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let ans = [];
  for (let i = left; i < left + k; i++) {
    ans.push(arr[i]);
  }
  return ans;
}

let arr = [1, 1, 2, 3, 4, 5];
let k = 4;
let x = -1;

console.log(Test(arr, k, x));
