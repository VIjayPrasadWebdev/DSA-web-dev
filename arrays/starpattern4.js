// 12345
// 1234
// 123
// 12
// 1

function Test(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = i; j > 0; j--) {
      row = row + " " + j;
    }
    console.log(row);
  }
}
console.log(Test(5));
