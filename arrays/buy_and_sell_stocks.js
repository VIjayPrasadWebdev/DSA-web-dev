function Test(arr) {
  let profit = 0;
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return profit;
}
let prices = [7, 1, 5, 3, 6, 4];
console.log(Test(prices));
