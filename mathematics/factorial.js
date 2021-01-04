/*
 * Time Complexity -> (-)(n)
 * Auxiliary Space -> (-)(1)
 */
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

/*
 * Time Complexity -> T(n) = T(n - 1) + (-)(1)
 * Auxiliary Space -> (-)(n) because of every call stack
 */
const factorialRec = (num) => {
  if (num === 1) return num;
  return num * factorialRec(num - 1);
};

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));

console.log(factorialRec(4));
console.log(factorialRec(5));
console.log(factorialRec(6));
