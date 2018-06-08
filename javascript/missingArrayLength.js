// You get an array of arrays.
// If you sort the arrays by their length, you will see,
// that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

const missingLengthSequence = (arrays) => {
  if (arrays.length === 0) return 0

  const lengths = arrays.map( (array) => { return array.length }).sort( (a,b) => { return a - b })
  let next = current = null

  for (var i = 0; i <= lengths.length - 1; i++) {
    next = lengths[i + 1]
    current = lengths[i]
    if (next - current > 1){
      return (next - 1)
    }
  }
}

// Test Cases:
console.log(missingLengthSequence([[2, 1, 4, 0, 1],[0, 2, 4, 2, 0, 2],[0, 2, 2, 0, 1, 4, 0, 1, 0],[1, 1, 0],[0, 2, 4, 4],[4],[4, 3, 0, 0, 1, 3, 1, 0, 3, 4, 4],[2, 3, 2, 0, 2, 4, 3, 2],[1, 3],[3, 2, 0, 1, 3, 3, 4, 3, 4, 4],[]]))
console.log(missingLengthSequence([[ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]]) )
console.log(missingLengthSequence([[1, 2, 3, 1, 1, 0],[2, 1, 1, 1],[4, 2, 3, 3, 2, 2, 1],[3, 0, 0, 3, 3, 4, 0, 1],[3, 1, 4, 1, 3, 0, 3, 3, 2]]))
console.log(missingLengthSequence([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(missingLengthSequence([]))
