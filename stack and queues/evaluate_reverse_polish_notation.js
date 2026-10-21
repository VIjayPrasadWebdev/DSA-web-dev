function Test(token) {
  let stack = [];

  //   // approach 1 :
  //   for (let i = 0; i < token.length; i++) {
  //     if (token[i].match(/\d/)) {
  //       stack.push(token[i]);
  //     } else {
  //       let a = stack.pop();
  //       let b = stack.pop();

  //       let value = eval(`${b} ${token[i]} ${a}`);
  //       stack.push(Math.trunc(value));
  //     }
  //   }

  // approach 2 : using Hashmap :

  let operatorMap = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a),
  };

  for (let i = 0; i < token.length; i++) {
    if (operatorMap[token[i]]) {
      let a = stack.pop();
      let b = stack.pop();
      let value = operatorMap[token[i]](Number(a), Number(b));

      stack.push(value);
    } else {
      stack.push(token[i]);
    }
  }
  console.log(stack);

  return Number(stack.pop());
  console.log(stack);
}

let token = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
console.log(Test(token));
