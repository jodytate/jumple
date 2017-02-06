const fs = require('fs');

const shuffle = function shuffle (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const jumple = function jumple (array) {
  const output = [];
  array.forEach(function (chunk) {
    output.push(chunk);
  });
  return output.join(' ');
}

const input = fs.readFileSync(__dirname + '/input.txt', 'utf8').toString();
const splitUp = input.split(' ');
const shuffled = shuffle(splitUp);
const newJumple = jumple(shuffled);

fs.writeFile('output.txt', newJumple, (error) => {
  if (error) {
    return console.error(error);
  } else {
    console.log('file saved');
  }
}); 