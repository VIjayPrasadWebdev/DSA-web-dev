let arr = [-9, 1, 33, 7, 6, 87, 13, 15];

function Test() {
  let largest = -Infinity;
  let secondlargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondlargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondlargest) {
      secondlargest = arr[i];
    }
  }

  return secondlargest;
}

console.log(Test(arr));
