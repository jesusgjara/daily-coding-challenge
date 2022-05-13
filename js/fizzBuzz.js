//PREP
// Given a number print from 1 to number
// if the number is divisible by 3 print fizz
// if numbr is divisible by 5 buzz
// if number is divisible by 3 and 5 print fizzbuzz

//Parameters: number, integer, positive
//Return: console.log
//Example:

function fizzBuzz(num) {
    //loop
    for(let i = 1; i <= num; i ++) {
        //conditional %3&5, %3, %5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz")
        } else if(i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
    //console.log num or fizz,buzz,fizzBuzz 
}

fizzBuzz(5)//1,2,fizz,4,buzz
fizzBuzz(3)//1,2,fizz
fizzBuzz(15)//1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz