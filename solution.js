function solution(arrayA, arrayB) {
  let indexA = 0
  
  let indexB =-1
  let in_arrayA=true
  let visitedIndices = []
  let visitedBValues = []

  while(visitedIndices.indexOf(indexA) == -1) {
    visitedIndices.push(indexA)
    indexB = arrayA[indexA]
    visitedBValues.push(indexB)
    indexA = arrayB[indexB - 1] - 1     

    in_arrayA = !in_arrayA
  }
  return visitedBValues
  
}

module.exports = { solution };
