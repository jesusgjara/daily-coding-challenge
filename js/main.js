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

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  //You got this!
   let arr = str.split("");
   arr.pop();
   arr.shift();
   return arr.join("");
 };



// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let arr = args.sort((a, b) => a - b);
    return arr[0];
  }
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // moment of truth
  if (flower1 % 2 == 0 && flower2 % 2 !== 0 || flower2 % 2 == 0 && flower1 % 2 !== 0 ) {
    return true
  } return false
}

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  } return "Hello, " + name + "!";
}

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

var stringToNumber = function(str){
 
  return Number(str);
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. i.e:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  return i*2;
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if ( bool === true ) {
      return ( "Yes" ); } 
      return ( "No" ); 
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  let arr = [];
  numbers.forEach(elem => arr.push(elem*elem));
  return arr.reduce((a, b) => a + b, 0);
}


// Complete the solution so that it reverses the string passed into it.
// 'word'   =>  'drow'
// 'world'  =>  'dlrow'

function solution(str){
  return str.split("").reverse().join("")
}

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// P: numbers, integeres and floats
// R: number. litres of water rounded to the smallest value
// E:
// P:
//write a function with "time" parameter that recieves a number as argument
const litres = time => Math.floor(time * 0.5);
// multiplys time * 0.5
//Math.floor(result of the multiplication)


console.log(litres(3),'-->',1)
console.log(litres(7),'-->',3)
console.log(litres(6.7),'-->',3)
console.log(litres(11.8),'-->',5)