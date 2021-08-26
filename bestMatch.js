// It is guaranteed that zamalekGoals[i] < ALAHLYGoals[i] for each element.
function bestMatch(ALAHLYGoals, zamalekGoals) {
	let goalDifferenceArray = [];
	let bestMatches = [];
	for (let i = 0; i < ALAHLYGoals.length; i += 1) {
		goalDifferenceArray.push(ALAHLYGoals[i] - zamalekGoals[i]);
	}

	for (let i = 0; i < goalDifferenceArray.length; i += 1) {
		if (goalDifferenceArray[i] == Math.min(...goalDifferenceArray)) {
			bestMatches.push({
				indexOfBestMatch: i,
				goals: zamalekGoals[i],
			});
		}
	}

	return bestMatches.sort((a, b) => b.goals - a.goals)[0].indexOfBestMatch;
}
bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]);

// Test.assertEquals(bestMatch([6, 4],[1, 2]),1)

// Test.assertEquals(bestMatch([1],[0]),0)

// Test.assertEquals(bestMatch([1, 2, 3, 4, 5],[0, 1, 2, 3, 4]),4)

// Test.assertEquals(bestMatch([3, 4, 3],[1, 1, 2]),2)

// Test.assertEquals(bestMatch([4, 3, 4],[1, 1, 1]),1)
