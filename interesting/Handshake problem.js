//* Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

//* Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

//* However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

//* Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

//* =============My Solution================

function getParticipants(handshakes) {
  const getHandshakes = (farmers) => {
    let handshakes = 0;
    for (let i = 1; i < farmers; i++) {
      handshakes += i;
    }
    return handshakes;
  };
  let tempHandshakes = 0;
  let farmerCounter = 0;
  while (tempHandshakes < handshakes) {
    tempHandshakes = getHandshakes(farmerCounter);
    farmerCounter += 1;
  }
  return handshakes <= 0 ? 0 : farmerCounter - 1;
}

//* =============CodeWars Best Practices Solution================

// function getParticipants(handshakes){
//   let farmers = 0
//   while(handshakes > farmers * (farmers - 1) / 2){
//     farmers++
//   }
//   return farmers
// }

console.log(getParticipants(0)); // 0
console.log(getParticipants(1)); // 2
console.log(getParticipants(3)); // 3
console.log(getParticipants(6)); // 4
console.log(getParticipants(7)); // 5
