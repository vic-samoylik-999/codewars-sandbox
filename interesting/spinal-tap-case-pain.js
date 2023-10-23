// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    const array = [];
    let collector = '';

    for(let i = 0; i < str.length; i++) {
        if(str[i] == ' ' && str[i+1] == str[i+1].toLowerCase()) {
            array.push(collector)
            collector = ''
        } else if(str[i] == '-') {
            array.push(collector)
            collector = ''
        }else if(str[i] == ' ' || str[i] == "_") { 
            continue
        } else if(str[i] == str[i].toUpperCase() && i > 0) {
            array.push(collector)
            collector = ''
            collector += str[i].toLowerCase()
        } else {
            collector += str[i].toLowerCase()
            if(i == str.length - 1) {
                array.push(collector)
            } 
        }
    }
    return array.join('-')
}
  
console.log(spinalCase('This Is Spinal Tap')) // shoudl return this-is-spinal-tap
console.log(spinalCase('This is spinal tap')) // shoudl return this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")) // shoudl return this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")) // shoudl return the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")) // shoudl return teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things")) // shoudl return all-the-small-things