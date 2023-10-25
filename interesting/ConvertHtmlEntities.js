// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    const cases = [
        ["&", "&amp;"],
        ["<", "&lt;"],
        [">", "&gt;"],
        ["\"", "&quot;"],
        ["'", "&apos;"],
    ]

    const toArray = str.split('')
    
    for(let i = 0; i < toArray.length; i++) {
        for (let j = 0; j < cases.length; j++) {
            if(toArray[i] === cases[j][0]) {
                toArray[i] = cases[j][1]
            }
        }
    }
    return toArray.join('')
}
  

console.log(convertHTML("Dolce & Gabbana"))  //should return the string Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // should return the string Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")) // should return the string Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')) // should return the string Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List")) // should return the string Schindler&apos;s List.
console.log(convertHTML("<>")) // should return the string &lt;&gt;.
console.log(convertHTML("abc")) // should return the string abc.