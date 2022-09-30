interface RaceData {
	"position": string;
	"time": string;
	"raceNumber": string;
	"firstName": string;
	"lastName": string;
	"club": string;
	"gender": string;
	"age": string;
}

const hasAge = (age: string) => {
	const isNumber = parseInt(age, 10);
	if (isNaN(isNumber) || isNumber === 0) {
		return 0;
	}
	return isNumber;
}

export const sortByAge = (raceData: RaceData[]) => {
	const age19 = raceData.filter(row => +row.age < 20 && +row.age > 0);
	const age29 = raceData.filter(row => +row.age < 30 && +row.age > 19);
	const age39 = raceData.filter(row => +row.age < 40 && +row.age > 29);
	const age49 = raceData.filter(row => +row.age < 50 && +row.age > 39);
	const age59 = raceData.filter(row => +row.age < 60 && +row.age > 49);
	const age100 = raceData.filter(row => +row.age > 59);
	const noAge = raceData.filter(row => hasAge(row.age) === 0);

	return [
		{data: age19, title: 'Under 20'},
		{data: age29, title: 'Under 30'},
		{data: age39, title: 'Under 40'},
		{data: age49, title: 'Under 50'},
		{data: age59, title: 'Under 60'},
		{data: age100, title: 'Seniors'},
		{data: noAge, title: 'Unknown age'},
	];
}
