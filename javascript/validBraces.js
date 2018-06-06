// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

const validBraces = (string) => {
  const braces = {
    "open": { "(":"(","[":"[","{":"{" },
    "closed": { ")":"(","]":"[","}":"{" }
  }
  let stack = []

  for (let i = 0; i < string.length; i++) {
    let brace = string[i]

    if (braces.open[brace] || braces.closed[brace] !== stack[stack.length - 1]){
      stack.push(brace)
    } else {
      stack.pop()
    }
  }
  return (stack.length === 0) ? true : false
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