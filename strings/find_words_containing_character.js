function Test(words, x) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    // if (words[i].includes(x)) {
    //   result.push(i);
    // }

    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        result.push(i);
        break;
      }
    }
  }
  return result;
}
let words = ["leet", "code"];
let x = "e";
console.log(Test(words, x));
