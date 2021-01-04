/*
 * Time Complexity -> (-)(n)
 * This solution overflows quickly
 */
const factZero = (num) => {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  let count = 0;
  while (factorial % 10 === 0) {
    count++;
    factorial /= 10;
  }

  return count;
};

/*
 * Time Complexity ->
 * 5^k <= n
 * k <= log5(n)
 * (-)(log(n))
 */ 
const countZero = (num) => {
  let res = 0;
  for (let i = 5; i <= num; i *= 5) {
    res += Math.floor(num / i);
  }
  return res;
};

console.log(factZero(5));
console.log(factZero(10));
console.log(factZero(100));
console.log(countZero(5));
console.log(countZero(10));
console.log(countZero(100));
console.log(countZero(251));
