function Test(s) {
  // approach 1 :
  //   let stack = [];
  //   let answer = "";

  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === "(") {
  //       stack.push(s[i]);
  //       let stacklength = stack.length;

  //       if (stacklength > 1) {
  //         answer = answer + s[i];
  //       }
  //     } else {
  //       console.log(stack);

  //       let stacklength = stack.length;

  //       if (stacklength > 1) {
  //         answer = answer + s[i];
  //       }
  //       stack.pop();
  //     }
  //   }
  //   return answer;

  // approach 2 :
  let level = 0;
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      answer = answer + (level > 1 ? s[i] : "");
    } else {
      answer = answer + (level > 1 ? s[i] : "");
      level--;
    }
  }
  return answer;
}
let s = "(()())(())";
console.log(Test(s));
