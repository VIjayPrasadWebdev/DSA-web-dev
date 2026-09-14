function Test(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let previous = i - 1;

    while (arr[previous] > current && previous >= 0) {
      arr[previous + 1] = arr[previous];
      previous--;
    }
    arr[previous + 1] = current;
  }
  return arr;
}
let numbers = [10, 3, 426, 23, 4, 0, 2, 12];

console.log(Test(numbers));
