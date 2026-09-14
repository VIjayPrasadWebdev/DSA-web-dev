function Test(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(middle);

    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;

  // for (let i = left; i < arr.length; i++) {
  //   let middle = Math.floor((left + right) / 2);

  //   if (arr[middle] === target) {
  //     return middle;
  //   }
  //   if (arr[middle] < target) {
  //     left = middle + 1;
  //   } else {
  //     right = middle - 1;
  //   }
  // }
  // return -1;
}
let arr = [-1, 0, 3, 5, 9, 12];
console.log(Test(arr, 0));
