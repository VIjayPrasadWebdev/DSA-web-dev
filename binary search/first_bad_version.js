/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

const firstBad = 4;

var isBadVersion = function (version) {
  return version >= firstBad;
};

var Test = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      let isBad = isBadVersion(mid);

      if (isBad === true) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  };
};

console.log(isBadVersion());
