// Create a function strCount(takes an object as argument) that will count all string values inside an object.For example:

// strCount({
// 	first: "1",
// 	second: "2",
// 	third: false,
// 	fourth: ["anytime", 2, 3, 4],
// 	fifth: null
// })
//   //returns 3

// ==============My Solution==============================

// function strCount(obj) {
// 	let count = 0
// 	const counter = (obj) => {
// 		const values = Object.values(obj)
// 		for (let value of values) {
// 			if (typeof value === 'string') count += 1
// 			if (typeof value === 'object' && value !== null) {
// 				counter(value)
// 			}
// 		}
// 	}
// 	counter(obj)
// 	return count
// }

// ==============CodeWars Solution=========================================

function strCount(obj) {
	let count = 0
	for (let key in obj) {
		if (typeof obj[key] === 'string') count += 1
		if (typeof obj[key] === 'object') count += strCount(obj[key])
	}
	return count
}

console.log(strCount({
	first: "1",
	second: "2",
	third: false,
	fourth: ["anytime", 2, 3, 4, ['valera']],
	fifth: null
}))