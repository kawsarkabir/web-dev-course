function filterIntegers(arr) {
	if (!Array.isArray(arr)) {
		return "invalid";
	}

	let onlyIntegerArray = [];

	for (const arrElement of arr) {
		if (typeof arrElement !== "string") {
			if (!Number.isInteger(arrElement)) {
				return "array element must be string or integer";
			}
		}

		if (Number.isInteger(arrElement)) {
			onlyIntegerArray.push(arrElement);
		}
	}

	return onlyIntegerArray;
}

console.log(filterIntegers([15, 11, 20, "55", " "]));
