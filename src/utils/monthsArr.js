const minYear = 2019;
const maxYear = 2060;

function createMonthsArr(minYear, maxYear) {
	const months = [];
    
	function pushToMonthsArr(year, month, days) {
		months.push({
			year,
			month,
			days
		})
	}

	// Loop over years
	for (let currentY = minYear; currentY <= maxYear; currentY++) {
		// Loop over months per year
		// 0-based index for months
		for (let currentM = 0; currentM <= 11; currentM++) {
			switch (currentM) {
			case 0:
			case 2:
			case 4:
			case 6:
			case 7:
			case 9:
			case 11:
				pushToMonthsArr(currentY, currentM, 31)
				break;
			case 3:
			case 5:
			case 8:
			case 10:
				pushToMonthsArr(currentY, currentM, 30)
				break;
			case 1:
				pushToMonthsArr(currentY, currentM, new Date(currentY, currentM + 1, 0).getDate())
				break;
			}
		}
	}
	/*
		[
			{
				Year: YYYY
				Month: D;
				Days: DD
			}
			...
		]
	*/
	return months;
}

export default createMonthsArr(minYear, maxYear);
