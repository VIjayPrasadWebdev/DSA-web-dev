function Test(s) {
  s = s.toLowerCase();
  // let filteredString = "";
  // let reverse = "";
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i].match(/[a-z0-9]/)) {
  //     filteredString += s[i];
  //     reverse = s[i] + reverse;
  //   }
  // }
  // reverse = filteredString.split("").reverse().join("");

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/)) {
      i++;
    } else if (!s[j].match(/[a-z0-9]/)) {
      j--;
    } else if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
  // return reverse === filteredString;
}

let s = "A man, a plan, a canal: Panama";
console.log(Test(s));
