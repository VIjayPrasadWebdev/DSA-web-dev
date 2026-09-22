function Test(nums) {
  let currentone = 0;
  let maxone = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentone++;
    }
    if (nums[i] === 0) {
      maxone = Math.max(currentone, maxone);
      currentone = 0;
    }
  }
  console.log(currentone);
  return Math.max(currentone, maxone);
}

nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1];

console.log(Test(nums));
