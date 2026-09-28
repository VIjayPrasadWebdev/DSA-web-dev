function Test(s, t) {
  //return (s = s.split("").sort().join("") === t.split("").sort().join(""));

  if (s.length != t.length) return false;
  let store = {};

  for (let i = 0; i < s.length; i++) {
    if (!store[s[i]]) {
      store[s[i]] = 1;
    } else {
      store[s[i]]++;
    }
  }
  console.log(store);

  for (let j = 0; j < t.length; j++) {
    if (!store[t[j]] || store[t[j]] < 0) {
      return false;
    } else {
      store[t[j]]--;
    }
  }
  console.log(store);

  return true;
}
let s = "anagram",
  t = "nagaram";
console.log(Test(s, t));
