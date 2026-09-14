function Test(arr) {
  let n = arr.length;

  console.log(Math.floor(n / 2));

  for (let i = 0; i < n; i++) {
    return Math.floor(arr[i] / 2);
  }
}

let arr = [1, 2, 3, 4, 5];

console.log(Test(arr));
