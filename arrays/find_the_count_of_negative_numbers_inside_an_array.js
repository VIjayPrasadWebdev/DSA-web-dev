let arr = [-6, 3, 8, -2, -9, 11, -9];
function Test(arr) {
  let negativecounts = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativecounts.push(arr[i]);
      count++;
    }
  }
  //return negativecounts.length;
  return count;
}

console.log(Test(arr));
