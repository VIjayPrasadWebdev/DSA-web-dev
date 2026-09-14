let arr = [1, 9, 5, 3, 2];
function Test(arr) {
  let mid = arr.length / 2;

  // base case :

  if (arr.length === 1) return arr;

  let left = Test(arr.slice(0, mid));
  let right = Test(arr.slice(mid));

  return TestHelper(left, right);
}

function TestHelper(left, right) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(Test(arr));
