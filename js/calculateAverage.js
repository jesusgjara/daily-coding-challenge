// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//PREP 

//Parameters: array of numbers. array could be empty. expected just integers 
//Return: average of numbers in the array. if the array is empty return 0
function find_average( array ) {
    // create a variable sum with the value of all the elements inside the array -> array.reduce
    const sum = array.reduce( ( a, b ) => a + b, 0 ); 
    // make an if statement to check if array is empty
    if ( array.length === 0 ) {
        return 0
    } else {
        // return sum divided by array.length 
        return sum / array.length;
    }  
  }



//Example: 
console.log(find_average([2,4,6])) //--> 4
console.log(find_average([1,1,1])) //--> 1
console.log(find_average([1,2,3,4])) //--> 2.5
console.log(find_average([])) //--> 0


