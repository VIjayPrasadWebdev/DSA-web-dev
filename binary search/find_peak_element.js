function Test(arr) {
  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 1) return 0;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid + 1] > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

let nums = [1, 2, 1, 3, 5, 6, 4];

console.log(Test(nums));
