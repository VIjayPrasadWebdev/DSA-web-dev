let arr = [2, 3, 5, 2, 3, 7, 1, 5, 6];
function Test(arr) {
  let updatedarr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!updatedarr.includes(arr[i])) {
      updatedarr.push(arr[i]);
    }
  }
  return updatedarr;
}
console.log(Test(arr));
