// function rot13(message) {
//   const dictionary = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   const arr = message
//     .toLowerCase()
//     .split("")
//     .map((item) =>
//       dictionary.indexOf(item) > -1
//         ? dictionary[
//             dictionary.indexOf(item) + 13 < dictionary.length
//               ? dictionary.indexOf(item) + 13
//               : dictionary.indexOf(item) + 13 - dictionary.length
//           ]
//         : item,
//     )
//     .join("");
//   return arr;
// }

// console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ!123")); // NOPQRSTUVWXYZABCDEFGHIJKLM

function rot13(message) {
  const lettersOnlyRegex = /[a-zA-Z]/;
  return message
    .split("")
    .map((item) => {
      return lettersOnlyRegex.test(item)
        ? String.fromCharCode(item.charCodeAt(0) + 13)
        : item;
    })
    .join("");
}

console.log(rot13("abcdefghijklm"));
