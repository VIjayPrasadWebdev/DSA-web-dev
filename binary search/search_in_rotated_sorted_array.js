function Test(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  console.log(left, right);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    // left side sorted :

    if (nums[mid] >= nums[left]) {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // right side sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(Test(nums, target));
