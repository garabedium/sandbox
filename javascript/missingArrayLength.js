// You get an array of arrays.
// If you sort the arrays by their length, you will see,
// that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

const missingLengthSequence = (arrays) => {
  const lengths = arrays.map( (array) => {
    return array.length
  }).sort()
  return lengths
}

console.log(missingLengthSequence([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));