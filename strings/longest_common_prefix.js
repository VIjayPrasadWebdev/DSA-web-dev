function Test(strs) {
  let x = 0;
  let firstcharacter;
  while (x < strs[0].length) {
    firstcharacter = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (firstcharacter != strs[i][x] || x === strs[i].length) {
        return strs[0].substring(0, x);
      }
    }
    x++;
  }
  return strs[0];
}
let strs = ["flower", "f", "flight"];
let strs2 = ["dog", "racecar", "car"];
console.log(Test(strs));
