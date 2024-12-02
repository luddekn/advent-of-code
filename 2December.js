const fs = require("fs").promises;

const adventTask = async () => {
	try {
		const data = await fs.readFile("./2December.txt", "utf8");
		let rows = data.trim().split("\n");

		const newArr = [];
		for (let i = 0; i < rows.length; i++) {
			newArr.push(rows[i].split(" "));
		}

		function consistency(array) {
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

		let sum = 0;
		for (let j = 0; j < newArr.length; j++) {
			if (consistency(newArr[j])) {
				sum += 1;
			}
		}

		console.log(sum);
	} catch (error) {
		console.error(`An error occurred: ${error}`);
	}
};

adventTask();
