//  Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
    let missing;
    for(let i = 0; i < str.length; i++) {
        if((str.charCodeAt(i) + 1) != str.charCodeAt(i+1) && i != str.length - 1) {
            missing = String.fromCharCode(str.charCodeAt(i) + 1)
        }
    }
    return missing ? missing : undefined
}
  

console.log(fearNotLetter("abce")) // should return the string d.
console.log(fearNotLetter("abcdefghjklmno")) // should return the string i.
console.log(fearNotLetter("stvwx")) // should return the string u.
console.log(fearNotLetter("bcdf")) // should return the string e.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // should return undefined.