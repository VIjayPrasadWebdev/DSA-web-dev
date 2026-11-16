function Test(nums, target) {
  let store = {};

  for (let i = 0; i < nums.length; i++) {
    store[nums[i]] = i;
  }

  for (let j = 0; j < nums.length; j++) {
    let pair = target - nums[j];
    console.log(pair);

    if (store[pair] && store[pair] !== j) {
      return [j, store[pair]];
    }
  }

  console.log(store);
}

let arr = [2, 7, 11, 15];
let target = 9;
console.log(Test(arr, target));
