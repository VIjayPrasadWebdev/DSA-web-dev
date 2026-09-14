function Test(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }

  console.log(arr);

  return arr;
}

let arr = [1, 9, 5, 3, 2];
console.log(Test(arr));
