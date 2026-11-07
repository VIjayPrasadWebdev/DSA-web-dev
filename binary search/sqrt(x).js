function Test(x) {
  let left = 2;
  let right = Math.floor(x / 2);

  if (x < 2) return x;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (x === middle * middle) {
      return middle;
    } else if (x < middle * middle) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return right;
}
let x = 15;
console.log(Test(x));
