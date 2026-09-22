function Test(n) {
  // edge cases :

  if (n === 0) return 1;

  n = Math.abs(n);
  let count = 0;

  // main logic :
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

console.log(Test(2561));
