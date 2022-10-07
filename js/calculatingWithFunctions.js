// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

const expression = (num, func) => !func ? num : func(num);

const zero = (func) => expression(0, func);
const one = (func) => expression(1, func);
const two = (func) => expression(2, func);
const three = (func) => expression(3, func);
const four = (func) => expression(4, func);
const five = (func) => expression(5, func); 
const six = (func) => expression(6, func); 
const seven = (func) => expression(7, func); 
const eight = (func) => expression(8, func); 
const nine = (func) => expression(9, func); 

const plus = (x) => {
    return function(y) {
        return y + x
    }
}
const minus = (x) => {
    return function(y) {
        return y - x
    }
}
const dividedBy = (x) => {
    return function(y) {
        return Math.floor(y / x)
    }
}
const times = (x) => {
    return function(y) {
        return x * y
    }
}

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
