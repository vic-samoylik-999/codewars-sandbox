//* You might know some pretty large perfect squares. But what about the NEXT one?

//* Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

//* If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//* Examples:(Input --> Output)

//* 121 --> 144
//* 625 --> 676
//* 114 --> -1 since 114 is not a perfect square

// =============My Solution============

function findNextSquare(sq) {
  const isArgumentPerfect = Number.isInteger(Math.sqrt(sq)) && sq > 0;
  if (isArgumentPerfect) {
    let isLookingForNextPerfect = true;
    let nextSq = sq + 1;
    while (isLookingForNextPerfect) {
      if (Number.isInteger(Math.sqrt(nextSq))) {
        isLookingForNextPerfect = false;
        return nextSq;
      }
      nextSq += 1;
    }
  } else {
    return -1;
  }
}

// ==================CodeWars Solution=================
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

console.log(findNextSquare(625));
