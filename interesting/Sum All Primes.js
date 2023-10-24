// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function isPrime(num) {
	for (let i = 3; i < num; i += 2) {
		if (num % i === 0) return false
	}
	if (num % 2 === 0 && num !== 2) return false
	return num > 1
}

function sumPrimes(num) {
    let primesSum = 0;
    for(let i = 0; i <= num; i++) {
        if(isPrime(i)) {
            primesSum += i
        }
    }
    return primesSum
}
  
console.log(sumPrimes(10)); // sumPrimes(10) should return a number, should return 17.
console.log(sumPrimes(977)) // should return 73156.

