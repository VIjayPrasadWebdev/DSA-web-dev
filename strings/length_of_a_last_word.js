function Test(s) {
  // remove the trim spaces from the back:

  let n = s.length - 1; //finding the last character/value
  let count = 0;

  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    } else {
      n--;
    }
  }
  // let count = 0;
  // while (n >= 0) {
  //   if (s[n] !== " ") {
  //     count++;
  //     n--;
  //   } else {
  //     break;
  //   }
  // }

  return count;
}

console.log(Test("   fly me   to   the moon  "));
