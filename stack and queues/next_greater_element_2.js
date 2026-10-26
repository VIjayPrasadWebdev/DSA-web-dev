function Test(nums) {
  // approach 1 :

  //   let stack = [];
  //   let doublearr = [...nums, ...nums];

  //   stack.push(doublearr[doublearr.length - 1]);
  //   let nextarr = Array(doublearr.length).fill(-1);
  //   console.log(nextarr);
  //   console.log(stack);

  //   for (let i = doublearr.length - 2; i >= 0; i--) {
  //     while (stack.length) {
  //       let top = stack[stack.length - 1];
  //       if (doublearr[i] >= top) {
  //         stack.pop();
  //       } else {
  //         nextarr[i] = top;
  //         break;
  //       }
  //     }
  //     stack.push(doublearr[i]);
  //   }

  //   return nextarr.splice(0, doublearr.length / 2);

  // approach 2 :
  let stack = [];

  stack.push(nums[nums.length - 1]);
  let nextarr = Array(nums.length).fill(-1);
  console.log(nextarr);
  console.log(stack);

  for (let i = 2 * nums.length - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (nums[i % nums.length] >= top) {
        stack.pop();
      } else {
        nextarr[i % nums.length] = top;
        break;
      }
    }
    stack.push(nums[i % nums.length]);
  }

  return nextarr;
}
let nums = [1, 2, 3, 4, 3];

console.log(Test(nums));
