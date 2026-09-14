function Test(jewels, stones) {
  let count = 0;
  let hashmap = new Set();

  for (let i = 0; i < jewels.length; i++) {
    if (!hashmap.has(jewels[i])) {
      hashmap.add(jewels[i]);
    }
  }

  console.log(hashmap);

  for (let j = 0; j < stones.length; j++) {
    if (hashmap.has(stones[j])) {
      count++;
    }
  }

  //   for (let i = 0; i < stones.length; i++) {
  //     // if (jewels.includes(stones[i])) {
  //     //   count++;
  //     // }
  //     for (let j = 0; j < jewels.length; j++) {
  //       if (jewels[j] === stones[i]) {
  //         count++;
  //       }
  //     }
  //   }
  return count;
}
let jewels = "aA",
  stones = "aAAbbbb";

console.log(Test(jewels, stones));
