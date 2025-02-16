// Write a JavaScript Function   printNumber  that takes an integer N and prints all the numbers between 0 to N.

// Example:
// Input: 5
// Output: 0 1 2 3 4 5
// Constraints: 0 < N

// let printNumber = (N) => {
// 	if (typeof N !== "number" || N <= 0) {
// 		console.log("Please enter a valid positive Number.");
// 		return;
// 	}
// 	for (let i = 0; i < N; i++) {
// 		console.log(i);
// 	}
// };
// printNumber(5);
// function printNumber(n) {
// 	if (n <= 0) {
// 		console.log("Invalid input");
// 		return;
// 	}

// 	let temp = "";
// 	for (let i = 0; i <= n; i++) {
// 		temp += `${i} `;
// 	}

// 	console.log(typeof temp);
// }

// printNumber(5);

function printNumber(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	return n;
}

const result = printNumber(-5);
console.log(result);
