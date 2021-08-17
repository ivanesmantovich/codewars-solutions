// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

function formatDuration(seconds) {
	if (seconds == 0) return 'now';

	time = {
		year: {
			duration: 31536000,
			amount: 0,
		},
		day: { duration: 86400, amount: 0 },
		hour: { duration: 3600, amount: 0 },
		minute: { duration: 60, amount: 0 },
		second: { duration: 1, amount: 0 },
	};

	let returnString = '';
	let amountOfUnits = 0;

	for (let unitOfTime in time) {
		while (seconds >= time[unitOfTime].duration) {
			seconds -= time[unitOfTime].duration;
			time[unitOfTime].amount += 1;
		}

        // Чтобы заменять последнюю запятую на 'and' должно быть задействовано больше одной единицы времени
        if (time[unitOfTime].amount > 0) amountOfUnits += 1;

		if (time[unitOfTime].amount == 1)
			returnString += time[unitOfTime].amount + ' ' + unitOfTime + ', ';

		if (time[unitOfTime].amount > 1)
			returnString += time[unitOfTime].amount + ' ' + unitOfTime + 's, ';
	}

    // Отрез лишней запятой и пробела после последней единицы времени
	returnString = returnString.slice(0, returnString.length - 2);

    // При необходимости замена последней запятой на 'and'
	if (amountOfUnits >= 2) {
		let lastCommaPos = returnString.lastIndexOf(',');
		returnString =
			returnString.substring(0, lastCommaPos) +
			' and' +
			returnString.substring(lastCommaPos + 1);
	}

    return returnString;
}

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// Test.assertEquals(formatDuration(1), '1 second');
// Test.assertEquals(formatDuration(62), '1 minute and 2 seconds');
// Test.assertEquals(formatDuration(120), '2 minutes');
// Test.assertEquals(formatDuration(3600), '1 hour');
// Test.assertEquals(formatDuration(3662), '1 hour, 1 minute and 2 seconds');