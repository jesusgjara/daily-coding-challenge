// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    let val = 0
    if(arr !== []) {
    let positive = arr.filter(elem => elem > 0)
    return positive.reduce((acc, c) => acc + c, 0) 
  }return val
}