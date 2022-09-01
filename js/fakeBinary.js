// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x){
//     let result = ''
//     for (let i = 0; i < x.length; i++) {
//       if (x.charAt(i) * 1 < 5) {
//        result += '0'
//       } else result += '1'
//     }
//     return result
//   }

// Parameters: String of digits, input will never be an empty string

// Return: String, replacing digits < 5 = '0' ; digits > 5 = '1'  


// Pseudocode:

// write a function that takes a string of digits as parameter
function fakeBin (str) {
  // create a variable to hold the result
  let result = ''
  // iterate through the string length with a loop
  for (let i = 0; i < str.length; i++) {
    // check if str.charAt(i) < 5 result += '1'
    if (str.charAt(i) * 1 < 5) {
      result += '1'
      // else str.charAt(i) > 5 result += '0'
    } else if (str.charAt(i) * 1 > 5) {
      result += '0'
    }
  }
  // return result
  return result
}

// Example: 

fakeBin('45385593107843568'), '01011110001100111'
fakeBin('509321967506747'), '101000111101101'
fakeBin('366058562030849490134388085'), '011011110000101010000011011'

