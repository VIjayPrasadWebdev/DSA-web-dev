function Test(arr) {
  let stack = [];
  let futuretempddays = [];

  stack.push(arr.length - 1);

  futuretempddays = Array(arr.length).fill(0);

  for (let i = arr.length - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] > arr[top]) {
        stack.pop();
      } else {
        futuretempddays[i] = top - i;
        break;
      }
    }
    stack.push(i);
  }
  return futuretempddays;
}

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(Test(temperatures));
