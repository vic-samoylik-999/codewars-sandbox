// DESCRIPTION:
// I am the father of three wonderful sons.before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year.it's time to keep promises and I count on you.

// You have 3 input objects(school diaries) with school subjects and marks(1 - 10).For example:

// {
// 	'algebra': 6,
// 		'history': 8,
// 			'physics': 9,
// 				'geography': 2,
// 					'chemistry': 9
// }
// Return please:

// 'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

// 'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

// 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
// If two or three sons have the same highest marks, you need to choose the younger one.Use the age table which is constant and preloaded:

// const ageTable = {
// 	'firstSonAge': 14,
// 	'secondSonAge': 9,
// 	'thirdSonAge': 8
// }

// ===================================================

function whoseBicycle(diary1, diary2, diary3) {
	const everyDiaries = [diary1, diary2, diary3]
	const sons = [['first', 14], ['second', 9], ['third', 8]]
	const eachSonSum = []
	everyDiaries.forEach((item, index) => eachSonSum.push([sons[index][0], sons[index][1], Object.values(item).reduce((a, b) => a + b)]))
	const sortedDesc = eachSonSum.sort((prevVal, curVal) => curVal[2] - prevVal[2])
	const hasSameScore = sortedDesc.filter(item => item[2] === sortedDesc[0][2])
	const winner = hasSameScore.length > 1 ? hasSameScore.sort((a, b) => a[1] - b[1])[0][0] : sortedDesc[0][0]
	return `I need to buy a bicycle for my ${winner} son.`
}

const first = {
	'algebra': 6,
	'history': 7,
	'physics': 8,
	'geography': 9,
	'chemistry': 10
}
const third = {
	'algebra': 8,
	'history': 7,
	'physics': 8,
	'geography': 9,
	'chemistry': 10
}

const second = {
	'algebra': 8,
	'history': 7,
	'physics': 8,
	'geography': 9,
	'chemistry': 10
}

console.log(whoseBicycle(first, second, third))