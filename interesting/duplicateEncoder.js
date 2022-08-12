// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.Ignore capitalization when determining if a character is a duplicate.

// 	Examples
// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages.If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// function duplicateEncode(word) {
// 	let res = ''
// 	const toArr = word.toLowerCase().split('')
// 	toArr.forEach((item, index) => {
// 		const sliced = index === 0 ? toArr.slice(index + 1) : toArr.slice(0, index).concat(toArr.slice(index + 1))
// 		sliced.includes(item) ? res += ')' : res += '('
// 	})
// 	return res
// }

function duplicateEncode(word) {
	return word.toLowerCase()
		.split('')
		.map((item, index, arr) => {
			return arr.indexOf(item) === arr.lastIndexOf(item) ? '(' : ')'
		})
		.join('')
}

console.log(duplicateEncode("din"))     // => "((("
console.log(duplicateEncode("recede"))  // => "()()()"
console.log(duplicateEncode("Success")) // => ")())())"
console.log(duplicateEncode("(( @"))    // => "))(("