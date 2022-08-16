//* Task
//* Your task is to implement the so-called 'towel sort' algorithm.

//* towelSort function should expect matrix of any shape for example:


//* [
//*  [ 1, 2, 3 ],
//*  [ 4, 5, 6 ],
//*  [ 7, 8, 9 ],
//* ]
//* Following matrix should be 'sorted' to:

//*  [1, 2, 3, 6, 5, 4, 7, 8, 9 ]

function towelSort (matrix) {
    return matrix ? matrix.map((item, index) => {
        return index % 2 !== 0 ? item.reverse() : item
      }).flat()
        : []
}

const arr = [
     [ 1, 2, 3 ],
     [ 4, 5, 6 ],
     [ 7, 8, 9 ],
    ]

console.log(towelSort())