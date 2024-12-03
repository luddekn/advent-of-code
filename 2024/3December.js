const fs = require("fs").promises;

const adventTask = async () => {
	try {
		const data = await fs.readFile("./input/3December.txt", "utf8");
		let rows = data.trim().split("\n");

		const newArr = [];
		for (let i = 0; i < rows.length; i++) {
			newArr.push(rows[i].split(" "));
		}

		console.log(newArr);
	} catch (error) {
		console.error(`An error occurred: ${error}`);
	}
};

adventTask();
