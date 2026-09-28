function Test(strs) {
  let store = {};

  for (let i = 0; i < strs.length; i++) {
    let sortedstrs = strs[i].split("").sort().join("");
    if (!store[sortedstrs]) {
      store[sortedstrs] = [strs[i]];
    } else {
      store[sortedstrs].push(strs[i]);
    }
  }
  console.log(store);

  return Object.values(store);
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(Test(strs));
