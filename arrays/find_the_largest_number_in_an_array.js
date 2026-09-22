let arr = [-9, 1, 3, 7, 6, -87, 10, 15];

function Test(arr) {
  let largest = -Infinity;
  // let largest=arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }

  return largest;
}
console.log(Test(arr));
