function Test(arr) {
  // my own solution
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    // if my mid pair is on left side :

    if (mid > 0 && arr[mid] === arr[mid - 1]) {
      let leftodd = mid - 1 - left;
      if (leftodd % 2 === 1) {
        right = mid - 2;
      } else {
        // if left side is even :
        left = mid + 1;
      }
    }

    // if my mid pair is on right side  :
    else if (mid < arr.length - 1 && arr[mid] === arr[mid + 1]) {
      let rightodd = right - mid + 1;
      if (rightodd % 2 === 1) {
        left = mid + 2;
      } else {
        // if right side is even :
        right = mid - 1;
      }
    }

    // if my mid is single
    else {
      return arr[mid];
    }
  }
}
let nums = [3, 3, 7, 7, 10, 11, 11];
console.log(Test(nums));
