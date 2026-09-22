function binarySearchClosest(arr, left, right, target) {
  //Write your code here

  let sortednumbers = arr.sort((a, b) => a - b);
  console.log(sortednumbers);
  left = 0;
  right = sortednumbers.length - 1;
  let closestnumber = sortednumbers[0];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (
      (sortednumbers[mid] < target && sortednumbers[mid] > closestnumber) ||
      (sortednumbers[mid] > target && closestnumber < target)
    ) {
      return (closestnumber = sortednumbers[mid]);
    }
    if (sortednumbers[mid] === target) {
      return `Number found at index ${mid} and the Number is ${sortednumbers[mid]}`;
    } else if (sortednumbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
let numbers = [0, 3, 426, 23, 4, 2, 12, 35];
console.log(binarySearchClosest(numbers, 1, 2, 23));
