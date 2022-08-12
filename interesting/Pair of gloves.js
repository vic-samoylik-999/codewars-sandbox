//* Pair of gloves
//* Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

//* Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

//* Examples:
//* input = ["red", "green", "red", "blue", "blue"]
//* result = 2 (1 red pair + 1 blue pair)

//* input = ["red", "red", "red", "red", "red", "red"]
//* result = 3 (3 red pairs)

//* ============= My Solution ========================

// function numberOfPairs(gloves) {
//   let counter = 0;
//   const workArr = [...gloves];
//   for (let i = 0; i < workArr.length; i++) {
//     if (workArr.indexOf(workArr[i]) !== workArr.lastIndexOf(workArr[i])) {
//       workArr[workArr.lastIndexOf(workArr[i])] = 0;
//       workArr[workArr.indexOf(workArr[i])] = 0;
//       counter += 1;
//       console.log(workArr);
//     }
//   }
//   return counter / 2;
// }

// * ========== CodeWars Solution #1 =====================

// function numberOfPairs(gloves) {
//   var arr = Array.from(new Set(gloves));
//   return arr.reduce(
//     (a, b) => a + Math.floor(gloves.join("").match(new RegExp(b, "g")).length / 2),
//     0,
//   );
// }

// * ========== CodeWars Solution #2 =====================
function numberOfPairs(gloves) {
  const uniques = new Set(gloves);
  let amount = 0;
  for (let unique of uniques) {
    const count = Math.floor(gloves.filter((pair) => pair === unique).length / 2);
    amount += count;
  }
  return amount;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue", "blue", "red"])); // 2
// console.log(numberOfPairs(["red", "red"])); // 1
