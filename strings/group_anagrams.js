function Test(strs) {
  let store = {};

  // approach  1 :
  // for (let i = 0; i < strs.length; i++) {
  //   let sortedstrs = strs[i].split("").sort().join("");
  //   if (!store[sortedstrs]) {
  //     store[sortedstrs] = [strs[i]];
  //   } else {
  //     store[sortedstrs].push(strs[i]);
  //   }
  // }
  // console.log(store);

  // return Object.values(store);

  // approach 2 :

  for (let i = 0; i < strs.length; i++) {
    let frequency = Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      let index = strs[i].charCodeAt(j) - "a".charCodeAt();
      frequency[index]++;
    }
    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k) + frequency[k];
    }

    if (!store[key]) {
      store[key] = [strs[i]];
    } else {
      store[key].push(strs[i]);
    }
  }

  return Object.values(store);
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(Test(strs));
