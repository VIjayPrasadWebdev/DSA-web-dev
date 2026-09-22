// 1
// 22
// 333
// 4444
// 555555

function Test(n) {
  for (let i = 0; i < n + 1; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " " + (i + 1);
    }
    console.log(row);
  }
}
console.log(Test(4));
