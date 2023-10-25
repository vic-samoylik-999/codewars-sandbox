// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
    const fibs = [0, 1]
    for (let i = 3; i <= num + 1; i++) {
        if((fibs[i-3] + fibs[i-2]) <= num) {
            fibs.push(fibs[i-3] + fibs[i-2])
        } else {
            break
        }
    }
    const filtered = fibs.filter(item => item % 2 !== 0)
    return filtered.reduce((a, b) => a + b)
}  

console.log(sumFibs(1000))  // should return 1785.
console.log(sumFibs(4000000))  // should return 4613732.
console.log(sumFibs(4)) // should return 5.
console.log(sumFibs(75024)) // should return 60696.
console.log(sumFibs(75025)) // should return 135721.