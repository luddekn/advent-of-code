const fs = require("fs").promises;

const adventTask = async () => {
	try {
		const data = await fs.readFile("./input/2December.txt", "utf8");
		let rows = data.trim().split("\n");

		const newArr = [];
		for (let i = 0; i < rows.length; i++) {
			newArr.push(rows[i].split(" "));
		}

		function safeCheck(array) {
			let arrayIncreasing = null;

			for (let i = 0; i < array.length - 1; i++) {
				const currentNumber = parseInt(array[i]);
				const nextNumber = parseInt(array[i + 1]);

				const difference = nextNumber - currentNumber;

				if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
					return false;
				}

				if (arrayIncreasing === null) {
					if (difference > 0) {
						arrayIncreasing = true;
					} else if (difference < 0) {
						arrayIncreasing = false;
					}
				}

				if ((arrayIncreasing && difference < 0) || (!arrayIncreasing && difference > 0)) {
					return false;
				}
			}
			return true;
		}

		function problemDampener(array) {
			for (let i = 0; i < array.length; i++) {
				const temporaryArray = [...array.slice(0, i), ...array.slice(i + 1)];
				if (safeCheck(temporaryArray)) {
					return true;
				}
			}
			return false;
		}

		let safeArrays = 0;
		for (let j = 0; j < newArr.length; j++) {
			if (safeCheck(newArr[j]) || problemDampener(newArr[j])) {
				safeArrays += 1;
			}
		}

		console.log(safeArrays);
	} catch (error) {
		console.error(`An error occurred: ${error}`);
	}
};

adventTask();
