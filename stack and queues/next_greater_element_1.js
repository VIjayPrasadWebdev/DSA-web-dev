function Test(nums1, nums2) {
  let map = {};
  let stack = [];

  stack.push(nums2[nums2.length - 1]);
  map[nums2[nums2.length - 1]] = -1;
  console.log(stack);
  console.log(map);

  for (let i = nums2.length - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];

    if (nums2[i] < top) {
      map[nums2[i]] = top;
    } else {
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (nums2[i] > top) {
          stack.pop();
        } else {
          map[nums2[i]] = top;
          break;
        }
      }
      if (stack.length === 0) {
        map[nums2[i]] = -1;
      }
    }
    stack.push(nums2[i]);
    console.log(map);
  }

  let ans = [];

  for (let i = 0; i < nums1.length; i++) {
    ans.push(map[nums1[i]]);
  }
  console.log(map);
  return ans;
}

let nums1 = [2, 4],
  nums2 = [1, 2, 3, 4];

// output : [3,-1]
console.log(Test(nums1, nums2));
