// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

// function killer(suspectInfo, dead) {
// 	const keys = Object.keys(suspectInfo)

// }

// const suspects = {
// 	'James': ['Jacob', 'Bill', 'Lucas'],
// 	'Johnny': ['David', 'Kyle', 'Lucas'],
// 	'Peter': ['Lucy', 'Kyle']
// }

// const murdered = ['Lucas', 'Bill']

// console.log(killer(suspects, murdered))

// ====================My version=====================================================

function killer(suspectInfo, dead) {
	for (const key in suspectInfo) {
		if (dead.every(item => suspectInfo[key].includes(item))) return key
	}
}

// ====================Codewars Oneliner=====================================================

// function killer(suspectInfo, dead) {
// 	return Object.keys(suspectInfo).find(suspect => dead.every(victim => suspectInfo[suspect].includes(victim)))
// }

const suspects = {
	'James': ['Jacob', 'Lucas'],
	'Johnny': ['David', 'Kyle', 'Lucas', 'Bill'],
	'Peter': ['Lucy', 'Kyle']
}

const murdered = ['Lucas', 'Bill']

console.log(killer(suspects, murdered))

