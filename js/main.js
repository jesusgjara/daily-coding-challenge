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

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let sheep = arrayOfSheep.filter(elem => elem === true)
    return sheep.reduce((acc, c) => acc + c, 0) 
}
