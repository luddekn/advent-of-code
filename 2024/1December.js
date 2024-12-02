const fs = require("fs").promises;

const adventTask = async () => {
	try {
		const data = await fs.readFile("./input/1December.txt", "utf8");

		const rows = data.trim().split("\n");
		const leftList = [];
		const rightList = [];

		rows.forEach((row) => {
			const [left, right] = row.trim().split(/\s+/);
			leftList.push(parseInt(left, 10));
			rightList.push(parseInt(right, 10));
		});

		function sortArrays(arr1, arr2) {
			arr1.sort((a, b) => {
				return a - b;
			});
			arr2.sort((a, b) => {
				return a - b;
			});
		}

		function totalDistance(arr1, arr2) {
			sortArrays(arr1, arr2);
			let newArr = [];

			let result;
			for (let i = 0; i < arr1.length; i++) {
				result = arr2[i] - arr1[i];
				newArr.push(result);
			}

			newArr.map((num) => Math.abs(num));
			let newArrSum = 0;
			for (let j = 0; j < newArr.length; j++) {
				newArrSum += newArr[j];
			}
			return newArrSum;
		}

		console.log(totalDistance(leftList, rightList));

		function similarityScore(arr1, arr2) {
			sortArrays(arr1, arr2);
			let newArr = [];

			for (let k = 0; k < arr1.length; k++) {
				const currVal = arr1[k];
				let countCurrVal = arr2.filter((num) => num === currVal).length;
				if (countCurrVal > 0) {
					countCurrVal = currVal * countCurrVal;
					newArr.push(countCurrVal);
				}
			}
			let score = 0;
			for (let n = 0; n < newArr.length; n++) {
				score += newArr[n];
			}
			return score;
		}

		console.log(similarityScore(leftList, rightList));
	} catch (error) {
		console.error(`An error occurred: ${error}`);
	}
};

adventTask();
