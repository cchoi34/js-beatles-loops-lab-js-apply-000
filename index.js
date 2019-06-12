// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArray = [];
  for (var i = 0; i < arrayOfMusicians.length; i++) {
    for (var j = 0; i < arrayOfInstruments.length; i++) {
      var playerInstrument = `${arrayOfMusicians[i]} plays ${arrayOfInstruments[j]}`;
      newArray.push(playerInstrument);
    }
  }
  return newArray;
}

function johnLennonFacts(johnFacts) {
  let counter = 0;
  let excitedJohnFacts = [];
  while (counter < johnFacts.length) {
    excitedJohnFacts.push(johnFacts[counter] + '!!!');
    counter++;
  }
  return excitedJohnFacts;
}

function iLoveTheBeatles(num) {
  var lovingTheBeatles = [];
  let counter = 0;
  
  do {
    lovingTheBeatles.push("I love the Beatles!");
    counter++;
  } while (num < 15)
}