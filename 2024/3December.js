const fs = require("fs").promises;

const adventTask = async () => {
	try {
		const data = await fs.readFile("./input/3December.txt", "utf8");
		const mulRegex = /mul\(\d+,\d+\)/g;
		const combinedRegex = /(mul\(\d+,\d+\)|do\(\)|don't\(\))/g;

		function multiplyValues(array) {
			const sum = array[0] * array[1];
			return sum;
		}

		// Task one
		function firstTask() {
			let mulMatch = [...data.match(mulRegex).map((mul) => mul.replace("mul(", "").replace(")", "").split(","))];

			let totalSum = 0;
			for (let i = 0; i < mulMatch.length; i++) {
				totalSum += multiplyValues(mulMatch[i]);
			}

			console.log(totalSum);
		}
		firstTask();

		// Task two
		function secondTask() {
			let initialArray = [
				...data.match(combinedRegex).map((mul) => {
					if (mul.startsWith("mul(") && mul.endsWith(")")) {
						return mul.replace("mul(", "").replace(")", "").split(",");
					}
					return mul;
				}),
			];

			let enabled = true;
			let totalSum = 0;
			for (let i = 0; i < initialArray.length; i++) {
				if (typeof initialArray[i] === "string") {
					if (initialArray[i].startsWith("don't")) {
						enabled = false;
						continue;
					} else if (initialArray[i].startsWith("do")) {
						enabled = true;
						continue;
					}
				}

				if (enabled) {
					totalSum += multiplyValues(initialArray[i]);
				}
			}

			console.log(totalSum);
		}
		secondTask();
	} catch (error) {
		console.error(`An error occurred: ${error}`);
	}
};

adventTask();
