function Test(s, t) {
  let mapStoT = {};
  let mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapStoT[s[i]] != [t[i]] || mapTtoS[[t[i]]] != [s[i]]) {
      return false;
    }
  }
  console.log(mapStoT, mapTtoS);

  return true;
}
let s = "egg";
let t = "add";
console.log(Test(s, t));
