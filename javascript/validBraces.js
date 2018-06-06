// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

const validBraces = (string) => {
  const braces = { "(":")","[":"]","{":"}" }
  let stack = []
  let brace = ''

  for (let i = 0; i < string.length; i++) {
    brace = string[i]

    if ( braces[brace] ){
      stack.push(brace)
    } else if ( brace !== braces[stack.pop()] ){
      return false
    }
  }
  return true
}

let tests = [
  "(){}[]",   //=>  True
  "([{}])",   //=>  True
  "(}",       //=>  False
  "[(])",     //=>  False
  "[({})](]" //=>  False
]

tests.forEach( (test) => {
  console.log(validBraces(test))
})