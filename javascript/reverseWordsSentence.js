// Given a sentence
// Return the same sentence with every word reversed
// Use a stack data structure (LIFO)
// Do not use .reverse() method

// Input: The dog jumps high
// Output: Eht god spmuj hgih

const reverseSentence = (sentence) => {
  const words = sentence.toLowerCase().split(' ')
  let wordsReversed = []
  let stack, char

  words.forEach( (word) => {
    word = word.split('')
    stack = []

    while (word.length){
      char = word.pop()
      stack.push(char)
    }

    wordsReversed.push(stack.join(''))
  })

  return wordsReversed.join(' ')
}

console.log(reverseSentence("The dog jumps high"));
