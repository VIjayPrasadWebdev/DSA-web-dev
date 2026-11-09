function Test(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // if the array is already an sorted array :

    if (arr[left] <= arr[right]) {
      return arr[left];
    }

    // if may be mid is the breaking point for the rotating array :
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }

    // find the unsorted array in left and right

    // if the unsorted array is on left :
    else if (arr[left] > arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    {
    }
  }
}
let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(Test(nums));
