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
	const result = [];
	let resultLen = 0;
    
	function pushToMonthsArr(month, days) {
		result[resultLen - 1].months.push({
			month,
			days
		})
	}


	// Loop over years
	for (let i = minYear; i <= maxYear; i++) {
		// Push current year to array
		resultLen = result.push({ "year": i, "months": [] })
		// Loop over months in year
		// 0-based index for months
		for (let j = 0; j <= 11; j++) {
			switch (monthsList[j]) {
			case "January":
			case "March":
			case "May":
			case "July":
			case "August":
			case "October":
			case "December":
				pushToMonthsArr(monthsList[j], 31)
				break;
			case "April":
			case "June":
			case "September":
			case "November":
				pushToMonthsArr(monthsList[j], 30)
				break;
			case "February":
				pushToMonthsArr(monthsList[j], new Date(i, j + 1, 0).getDate())
				break;
			}
		}
	}
	return result
}

export default createMonthsArr(minYear, maxYear);
