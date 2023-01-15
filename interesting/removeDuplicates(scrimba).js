/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
// function removeDupeChars(chars){
//   return [...new Set(chars)].join('')
// }

// function removeDupeChars(chars){
//   const arr = chars.split('')
//   const unique = arr.filter((item, index) => {
//     return arr.indexOf(item) === index
//   })
//   return unique.join('')
// }

// function removeDupeChars(chars){
//   let pass = ''
//   for(let i = 0; i < chars.length; i++) {
//     if(chars.indexOf(chars[i]) === i) pass += chars[i]
//   }
//   return pass
// }

function removeDupeChars(chars) {
  let dupesRemoved = ''
  for(let i = 0; i < chars.length; i++) {
    if(!dupesRemoved.includes(chars[i])) dupesRemoved += chars[i]
  }
  return dupesRemoved
}


// console.log(removeDupeChars(password));

const testInput = "aabbccb1212"
console.log(removeDupeChars(testInput))