function calculate(...a) {
	let sum = a.reduce((a, b) => a + b)
	return function (...b) {
		return sum += b.reduce((a, b) => a + b)
	}
}

// ============Codewars Solutions===========================

// const calculate = (...a) => (...b) => [...a, ...b].reduce((a, b) => a + b)

// ========================================================

// function calculate(...a) {
// 	return function (...b) {
// 		return [...a, ...b].reduce((a, b) => a + b)
// 	}
// }

console.log(calculate(1, 1)(1, 1))