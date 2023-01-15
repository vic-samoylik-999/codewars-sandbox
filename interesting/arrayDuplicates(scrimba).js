/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon", 
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli", 
  "🧀 cheese",
  "🥦 broccoli", 
  "🌶️ hot sauce"
]

// function removeDupesFromArray(arr){
//   const noDuplicates = []
//   for(let i = 0; i < arr.length; i++) {
//     if(!noDuplicates.includes(arr[i])) {
//       noDuplicates.push(arr[i])
//     }
//   }
//   return noDuplicates
// }

function removeDupesFromArray(arr){
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}


console.log(removeDupesFromArray(eggScrambleRecipe));