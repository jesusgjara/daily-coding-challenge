// This Kata is intended as a small challenge for my students
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1

// PREP:
// P: two strings.
// R: Number (integer) of occurrences the 2nd argument found in the 1st one

function strCount(str, letter){  
    //create a variable for adding the count
    let count = 0;
    //loop through first string
    for (let i=0; i < str.length;  i++) {
        //check occurences of letter in the string
        if (str[i] === letter) {
            count += 1;
            //add occurences in count
        }
    } 
    return count 
    //return count 
  }


console.log(strCount("Hello", "o"))  //==>  1
console.log(strCount("Hello", "l"))  //==>  2
console.log(strCount("", "z"))       //==>  0