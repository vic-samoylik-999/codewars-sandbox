//* DESCRIPTION:
//* Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

//* Find the number of Friday 13th in the given year.

//* Input: Year in Gregorian calendar as integer.

//* Output: Number of Black Fridays in the year as an integer.

//* Examples:

//* unluckyDays(2015) == 3
//* unluckyDays(1986) == 1

//* Sunday - Saturday : 0 - 6

//* =======My Extended Solution (Returning Array with Month Names of Friday 13th)==================== 
// function unluckyDays(year){
//   let counter = 0
//   const unluckyDays = []
//   const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
//   const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//   for(let i = 1; i < 365; i++) {
//     const fullDate = new Date(year, 0, i + 1, 0, 0, 0)
//     const monthName = monthNames[fullDate.getMonth()]
//     const date = fullDate.getDate()
//     const dayOfWeek = weekDays[fullDate.getDay()]
//     if(date === 13 && dayOfWeek === 'friday') {
//       counter += 1
//       unluckyDays.push(monthName)
//     }
//   }
//   return unluckyDays
// }

//* ===========Codewars Solution(Best Practices)===========================
// function unluckyDays(year){
//   let unlucky = 0;
//   for (var i = 0; i < 12; i++) {
//     if(new Date(year, i, 13).getDay() === 5){
//       unlucky++;
//     }
//   }
//   return unlucky;
// }

//* ===========Regular Solution (Just counter)===============
function unluckyDays(year){
  let counter = 0
  for(let i = 1; i < 365; i++) {
    const fullDate = new Date(year, 0, i + 1)
    const date = fullDate.getDate()
    const dayOfWeek = fullDate.getDay()
    if(date === 13 && dayOfWeek === 5) counter += 1
  }
  return counter
}

console.log(unluckyDays(2015)) // 3
