function Test(arr) {
  // mathematical formula : sum=n*(n+1)/2

  let n = arr.length;
  let sum = (n * (n + 1)) / 2;
  console.log(sum);

  let partialsum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
    partialsum += arr[i];
  }

  return sum - partialsum;
}
nums = [3, 0, 1];
console.log(Test(nums));
