// Challenge::
// Mask all characters in a string except the last 4 characters.
  // Input: 18293393300, Output: #######3300
  // Input: 1, Output: 1
  // Input: 12345, Output: #2345

const maskify = (cc) => {
  let maskedStr = [],
      ccLength = cc.length;
  for(i = 0; i <= ccLength; i++){
    if (ccLength - i <= 4){
      maskedStr.push(cc[i])
    } else {
      maskedStr.push('#')
    }
  }
  return maskedStr.join('')
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));