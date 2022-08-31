//* Pig Latin
//? Pig Latin is a way of altering English Words. The rules are as follows:
//? - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
//? - If a word begins with a vowel, just add way at the end.
//? Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  const firstLetter = str[0];
  const re = /^(?![aeiouAEUIO])[a-zA-Z]/;
  const isFirstLetterConsonant = re.test(firstLetter);
  if (!isFirstLetterConsonant) {
    return str + "way";
  } else {
    let consonantCluster = "";
    for (let letter of str) {
      if (re.test(letter)) {
        consonantCluster += letter;
      } else {
        break;
      }
    }
    return str.slice(consonantCluster.length) + consonantCluster + "ay";
  }
}

console.log(translatePigLatin("glove"));
