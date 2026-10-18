function Test(s) {
  let symbols = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]]) {
      stack.push(s[i]);
      console.log(stack);
    } else {
      let top = stack.pop();
      console.log(top);

      // console.log(symbols[top]);

      if (!top || symbols[top] !== s[i]) {
        return false;
      }
    }

    console.log(stack);
  }

  return stack.length === 0;
}

let s = "[{()}]";
console.log(Test(s));
