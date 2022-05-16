//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function take(arr) {
    let newArr = []
    // for(let i=0; i <= arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         newArr.push(arr[i])
    //     }
    // }return newArr;
    arr.forEach (num=> {
        if( num % 2 === 0 ) {
            newArr.push(num)
        }
    });
    return(newArr)
}
console.log(take([1,2,10,5,7,8])) //[2,10,8]
console.log(take([7,20,11,6,90,45])) //[20,6,90]
console.log(take([10,2,80,33,14,8,16])) //[10,2,80,14,8,16]