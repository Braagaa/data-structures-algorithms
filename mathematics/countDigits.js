/*
 * Time Complexity: (-)(1)
 */

const countDigits = function (n) {
  return Math.round(Math.log10(n));
};

console.log(countDigits(789));
