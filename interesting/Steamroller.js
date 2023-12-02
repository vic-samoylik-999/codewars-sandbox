// Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    const flatArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatArray.push(...steamrollArray(arr[i]));
      } else {
        flatArray.push(arr[i]);
      }
    }
    return flatArray;
  };

console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])) // should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) // should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// Global variables should not be used.