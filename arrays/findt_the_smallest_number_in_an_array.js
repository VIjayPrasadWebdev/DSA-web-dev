let arr = [-9, 1, 3, 7, 6, -87, 10, 15];

function Test(arr) {
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}
console.log(Test(arr));
