const num1 = 3;
const num2 = 5;

const naturalNumbers = num => {
	let count = 0;
	for (let i = 1; i <= num; i++) { 
		count += i;
	}
	return count;
};

/* Optimal Solution
const naturalNumbers = num => num * (num + 1) / 2;
*/

console.log(naturalNumbers(num1));
console.log(naturalNumbers(num2));
