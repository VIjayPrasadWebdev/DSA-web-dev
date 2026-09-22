let arr = [-9, 1, 3, 7, 6, -87, 10, 15];

function Test(arr) {
  let smallest = Infinity;
  let secondsmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondsmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] !== smallest && secondsmallest > arr[i]) {
      secondsmallest = arr[i];
    }
  }

  return secondsmallest;
}
console.log(Test(arr));
