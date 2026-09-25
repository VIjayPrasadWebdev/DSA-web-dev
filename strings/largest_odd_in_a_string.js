function Test(nums) {
  let n = nums.length - 1;

  while (n >= 0) {
    if (Number(nums[n]) % 2 === 1) {
      return nums.substring(0, n + 1);
    } else {
      n--;
    }
  }
  return "";
}
let nums = "5234";
console.log(Test(nums));
