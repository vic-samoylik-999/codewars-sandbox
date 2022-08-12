function isPrime(num) {
	for (let i = 3; i < num; i += 2) {
		if (num % i === 0) return false
	}
	if (num % 2 === 0 && num !== 2) return false
	return num > 1
}

console.log(isPrime(5099))  /* true */
console.log(isPrime(2))  /* true  */
// console.log(isPrime(-1)) /* false */