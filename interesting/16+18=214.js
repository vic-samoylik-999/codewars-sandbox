function add(num1, num2) {
	const toReversedArray = num => num.toString().split('').reverse()
	const numOneArr = toReversedArray(num1)
	const numTwoArr = toReversedArray(num2)
	const biggerNum = num1 >= num2 ? numOneArr : numTwoArr
	const smallerNum = num1 <= num2 ? numOneArr : numTwoArr
	return (
		parseInt(biggerNum.map((item, index) => {
			return smallerNum[index] !== undefined ? parseInt(item) + parseInt(smallerNum[index]) : parseInt(item)
		}).reverse().join(''))
	)
}

console.log(typeof (add(2, 11)))
