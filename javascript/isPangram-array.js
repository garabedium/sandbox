// Challenge::
  // Determine if string is a pangram: if string contains every letter in the alphabet
  // Return true if pangram, else false

function isPangram(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const phrase = string.toLowerCase();
  let letters = [];

  for(let i = 0; i <= phrase.length; i++){
    let char = phrase[i];
    if (alphabet.indexOf(char) > -1 && letters.indexOf(char) === -1){
      letters.push(char)
    }
  }
  return (letters.length === 26) ? true : false
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("The quick brown FOX"));
console.log(isPangram("Pack my box with five dozen liquor jugs"));
console.log(isPangram("Cwm fjord bank glyphs vext quiz"));
console.log(isPangram("teamwork makes the teamwork lorem ipsum"));