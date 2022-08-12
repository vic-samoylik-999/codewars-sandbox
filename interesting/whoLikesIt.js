// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.It must return the display text as shown in the examples:

// []-- > "no one likes this"
// ["Peter"]-- > "Peter likes this"
// ["Jacob", "Alex"]-- > "Jacob and Alex like this"
// ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
	const numLikers = names.length
	const endMessage = numLikers === 0 || numLikers === 1 ? 'likes this' : 'like this'
	return numLikers === 0 ? `no one ${endMessage}` :
		numLikers === 1 ? `${names[0]} ${endMessage}` :
			numLikers === 2 ? `${names[0]} and ${names[1]} ${endMessage}` :
				numLikers === 3 ? `${names[0]}, ${names[1]} and ${names[2]} ${endMessage}` :
					`${names[0]}, ${names[1]} and ${numLikers - 2} others ${endMessage}`
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]))