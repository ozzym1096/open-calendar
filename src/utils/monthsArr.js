const minYear = 2019;
const maxYear = 2060;

const monthsList = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
]

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
			switch (monthsList[currentM]) {
			case "January":
			case "March":
			case "May":
			case "July":
			case "August":
			case "October":
			case "December":
				pushToMonthsArr(currentY, monthsList[currentM], 31)
				break;
			case "April":
			case "June":
			case "September":
			case "November":
				pushToMonthsArr(currentY, monthsList[currentM], 30)
				break;
			case "February":
				pushToMonthsArr(currentY, monthsList[currentM], new Date(currentY, currentM + 1, 0).getDate())
				break;
			}
		}
	}
	/*
		[
			{
				Year: YYYY
				Month: "Month";
				Days: DD
			}
			...
		]
	*/
	return months;
}

export default createMonthsArr(minYear, maxYear);
