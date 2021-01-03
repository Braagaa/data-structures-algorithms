/*
 * x % 10 -> last digit
 * Math.floor(x / 10) -> remaining digits
 *
 * Time Complexity: (-)(d) where d is the number of digits of the input
 * number.
 */

const palindrome = function (num) {
  let current = num;
  let rev = 0;

  while (current !== 0) {
    rev = rev * 10 + (current % 10);
    current = Math.floor(current / 10);
  }

  return num === rev;
};

console.log(palindrome(367));
console.log(palindrome(363));
