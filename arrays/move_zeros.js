function Test(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x++;
      console.log(x);
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}
let arr = [0, 1, 0, 3, 12];
console.log(Test(arr));
