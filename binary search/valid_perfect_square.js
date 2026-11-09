function Test(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}

let num = 16;
console.log(Test(num));
