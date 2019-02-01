// Create a function that reverses a word
const greeting = 'Mississippi River';
let words = greeting.split('');
words = words.join('')

function randomizer(words) {
  let randomElement1 = words[Math.floor(Math.random()* words.length)];
  let randomElement2 = words[Math.floor(Math.random()* words.length)];
  const element = [randomElement1, randomElement2];
  return element;
}
function swapLetter(randomizer, words) {
  let [randomElement1, randomElement2] = (randomizer(words));
  let new_words = [];
  for (let letter of words) {
    if (randomElement1 === letter) {
      letter = randomElement2;
      new_words.push(letter);
    } 
    else if (randomElement2 === letter) {
      letter = randomElement1;
      new_words.push(letter);
    }
    else {
      new_words.push(letter);
    }
  }
  return new_words.join('');
}
// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
