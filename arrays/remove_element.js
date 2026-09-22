let arr = [1, 2, 3, 3, 4, 5];

function Test(arr, val) {
  // let count = 0;

  // x is for positioning the elements
  x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      // if the val is not equal to an then i'm assigning a[x] from a[i] and moving x to x+1
      // This will overwrite the a[i] from moving x from one by one x+1
      arr[x] = arr[i];
      x = x + 1;
      // count++;
    }
  }
  //return arr;

  // why x because after assigining a[x] from a[i] we are moving x to x+1 so, we should return x instead of x+1
  return x;
}

console.log(Test(arr, 3));
