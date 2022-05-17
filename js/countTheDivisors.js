// Count the divisors of a number
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

//P: positive integer
//R: number with the count of divisors 
function countDivisors(num) {
    //create a variable count
    let count = 0;
    //create a loop that goes from 1 - num
    for ( let i=1; i<=num; i++) {
        //conditional that checks num % i === 0
        if ( num % i == 0) {
            //if true count++
            count++
        }

    } return count
    //return count
}

//E:
console.log(countDivisors(4)) //--> 3
console.log(countDivisors(5)) //--> 2
console.log(countDivisors(12)) //--> 6
console.log(countDivisors(30)) //--> 8