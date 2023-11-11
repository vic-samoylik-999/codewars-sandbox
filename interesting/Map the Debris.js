// Map the Debris
// According to Kepler's Third Law, the orbital period  T
//   of two point masses orbiting each other in a circular or elliptic orbit is:

// Link to the original challenge with formula - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
function calculateOrbitalPeriod(radius, avgAlt, gm) {
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow(radius + avgAlt ,3) / gm))
}

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const result = []
    for(let i = 0; i < arr.length; i++) {
        result.push(
            {
                name: arr[i].name, 
                orbitalPeriod: calculateOrbitalPeriod(earthRadius, arr[i].avgAlt, GM)
            }

        )
    }
    return result
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])) // should return [{name: "sputnik", orbitalPeriod: 86400}].
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])) // should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]