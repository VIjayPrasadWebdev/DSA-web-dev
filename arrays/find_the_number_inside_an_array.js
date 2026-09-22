let arr = [1, 3, 7, 6, 10, 15];
function Test(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] == number) {
      return i;
    }
  }
  return -1;
}

console.log(Test(arr, 15));
