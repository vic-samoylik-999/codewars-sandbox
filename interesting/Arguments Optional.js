// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.
function addTogether() {
    for(let i = 0; i < arguments.length; i++) {
        if(typeof(arguments[i]) !== "number") return undefined
    }
    if(arguments.length > 1) {
        let sum = 0
        for(let i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    } else {
        let firstNum = arguments[0]
        return function(secondNum) {
            return addTogether(firstNum, secondNum)
        }
    }
}


console.log(addTogether(2, 3)) // should return 5.
console.log(addTogether(23.4, 30)) // should return 53.4.
console.log(addTogether("2", 3)) // should return undefined.
console.log(addTogether(5, undefined)) // should return undefined.
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")) // should return undefined.
console.log(addTogether(5)) // should return a function.
console.log(addTogether(5)(7)) // should return 12.
console.log(addTogether(2)([3])) // should return undefined.
console.log(addTogether(2, "3")) // should return undefined.