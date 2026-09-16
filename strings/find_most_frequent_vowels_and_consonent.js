function Test(s) {
  let hashmap = {};

  for (let i = 0; i < s.length; i++) {
    if (!hashmap[s[i]]) {
      hashmap[s[i]] = 1;
    } else {
      hashmap[s[i]]++;
    }
  }

  let maxvowels = 0;
  let maxconsonents = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let keys = Object.keys(hashmap);

  for (let j = 0; j < keys.length; j++) {
    if (vowels.includes(keys[j])) {
      if (hashmap[keys[j]] > maxvowels) {
        maxvowels = hashmap[keys[j]];
      }
    }
    if (hashmap[keys[j]] > maxconsonents) {
      maxconsonents = hashmap[keys[j]];
    }
  }
  return maxvowels + maxconsonents;
  console.log(hashmap);
}
let s = "successes";
console.log(Test(s));
