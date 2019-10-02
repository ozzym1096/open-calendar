'use strict'

function createMonthsArr(minYear, maxYear) {
	let firstDateOfMonth = Date.now();
	let lastDateOfMonth = Date.now()
	let index = 1;
	const months = [];

	// Loop over years
	for (let currentY = minYear; currentY <= maxYear; currentY++) {
		// Loop over months per year
		// 0-based index for months
		for (let currentM = 0; currentM <= 11; currentM++) {
			firstDateOfMonth = new Date(currentY, currentM, 1);
			lastDateOfMonth = new Date(currentY, currentM + 1, 0);

			months.push({
				_index: index,
				year: firstDateOfMonth.getFullYear(),
				month: firstDateOfMonth.getMonth(),
				startDate:
					currentY === minYear && currentM === 0 ? 1 : firstDateOfMonth.getDay() === 0 ? 1 : firstDateOfMonth.getDate() + (7 - firstDateOfMonth.getDay()),
				lastDateOfMonth: lastDateOfMonth.getDate(),
				lastDate:
					currentY === maxYear && currentM === 11 ? 31 : lastDateOfMonth.getDay() === 6 ? lastDateOfMonth.getDate() : lastDateOfMonth.getDate() + (6 - lastDateOfMonth.getDay()),
			})

			index++
		}
	}
	/*
		[
			{
				_index: int
				year: int,
				month: int,
				startDate: int,
				lastDateOfMonth: int,
        		lastDate: int
			}
			...
		]
	*/
	return months;
}

function pushToMonthsArr(monthsArr) {
	const lastItem = monthsArr[monthsArr.length - 1];
	const minYear = lastItem.year + 1;
	const itemsToAdd = [];

	let index = lastItem._index + 1;

	let firstDateOfMonth = Date.now();
	let lastDateOfMonth = Date.now();

	// Loop over years
	for (let currentY = minYear; currentY <= minYear + 2; currentY++) {
		// Loop over months per year
		// 0-based index for months
		for (let currentM = 0; currentM <= 11; currentM++) {
			firstDateOfMonth = new Date(currentY, currentM, 1);
			lastDateOfMonth = new Date(currentY, currentM + 1, 0);

			itemsToAdd.push({
				_index: index,
				year: firstDateOfMonth.getFullYear(),
				month: firstDateOfMonth.getMonth(),
				startDate:
					firstDateOfMonth.getDay() === 0 ? 1 : firstDateOfMonth.getDate() + (7 - firstDateOfMonth.getDay()),
				lastDateOfMonth: lastDateOfMonth.getDate(),
				lastDate:
					currentY === minYear + 2 && currentM === 11 ? 31 : lastDateOfMonth.getDay() === 6 ? lastDateOfMonth.getDate() : lastDateOfMonth.getDate() + (6 - lastDateOfMonth.getDay()),
			})
			index++
		}
	}
	return [...monthsArr, ...itemsToAdd]
}

function sliceMonthsArr(monthsArr) {
	return monthsArr.slice(24)
}

export {createMonthsArr, pushToMonthsArr, sliceMonthsArr};
