function isLeapYear(year) {
	return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}

const isLeapYearAF = (year) => year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;

// console.log(isLeapYear(2021))

module.exports = {isLeapYear, isLeapYearAF}