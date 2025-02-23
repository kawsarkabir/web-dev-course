function multiplicationTable(n) {
	if (typeof n !== "number" && n < 1) {
		return "Invalid Input";
	}

	for (let i = 1; i <= 10; i++) {
		console.log(n, " x ", i, " = ", n * i);
	}
}

console.log(multiplicationTable("5"));
