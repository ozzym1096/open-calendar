const minYear = 2019;
const maxYear = 2060;

function createMonthsArr(minYear, maxYear) {
	let months = [];
	let lastMonthDay = Date.now()

	// Loop over years
	for (let currentY = minYear; currentY <= maxYear; currentY++) {
		// Loop over months per year
		// 0-based index for months
		for (let currentM = 0; currentM <= 11; currentM++) {
			lastMonthDay = new Date(currentY, currentM + 1, 0);
		      	months.push({
				year: lastMonthDay.getFullYear(),
				month: lastMonthDay.getMonth(),
				days: lastMonthDay.getDate(),
				// Used to decide whether or not to add padding-bottom to months that end on a Saturday
				endsOnSat: lastMonthDay.getDay() === 6
			})
		}
	}
	/*
		[
			{
				year: YYYY,
				month: DD,
				days: DD,
				endsOnSat: bool
			}
			...
		]
	*/
	return months;
}

export default createMonthsArr(minYear, maxYear);
