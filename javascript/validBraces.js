// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Cases:
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


const validBraces = (string) => {
  const braces = string
  const openBraces = { "(":"(","[":"[","{":"{" }
  const closedBraces = { ")":"(","]":"[","}":"{" }
  let stack = []

  for (let i = 0; i < braces.length; i++) {
    let brace = braces[i]

    // If open brace, push it to the stack
    if (openBraces[brace]){
      stack.push(brace)
    // If closing brace matches last brace in the stack, pop it off the stack
    } else if ( closedBraces[brace] === stack[stack.length - 1] ) {
      stack.pop()
    // Else, there are additional closing braces
    } else {
      stack.push(brace)
    }

  }
  return (stack.length === 0) ? true : false
}

console.log(validBraces("[]"))