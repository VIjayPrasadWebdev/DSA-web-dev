function Test(s) {
  // let n = s.length;
  // let temp;
  // for (let i = 0; i < Math.floor(n / 2); i++) {
  //   // this is the logic : swap(i,n-1-i)
  //   console.log(s);
  //   temp = s[i];
  //   s[i] = s[n - 1 - i];
  //   s[n - 1 - i] = temp;
  //   console.log(s);
  // }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
      console.log(right);
  }

  

  return s;
}
let s = ["V", "I", "J", "A", "Y"];
console.log(Test(s));
