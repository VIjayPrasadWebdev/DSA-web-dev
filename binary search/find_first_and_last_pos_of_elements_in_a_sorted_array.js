function Test(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let ans = [-1, -1];

  // approach 1  :
  //   while (left < right) {
  //     let mid = left + Math.floor((right - left) / 2);

  //     if (arr[mid] < target) {
  //       left = mid + 1;
  //     } else {
  //       right = mid;
  //     }
  //   }
  //   if (arr[left] === target) ans[0] = left;
  //   left = 0;
  //   right = arr.length - 1;
  //   while (left < right) {
  //     let mid = left + Math.ceil((right - left) / 2);

  //     if (arr[mid] > target) {
  //       right = mid - 1;
  //     } else {
  //       left = mid;
  //     }
  //   }
  //   if (arr[right] === target) ans[1] = right;

  // approach 2 :

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      ans[0] = mid;
      right = mid - 1;
    }
  }

  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      ans[1] = mid;
      left = mid + 1;
    }
  }

  return ans;
}

let nums = [5, 7, 7, 8, 8, 10],
  target = 10;
console.log(Test(nums, target));
