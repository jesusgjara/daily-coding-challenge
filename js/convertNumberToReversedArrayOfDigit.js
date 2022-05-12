// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

const digitize = n => {
    let str = n.toString(); 
    let arr = [];
    for(let i= str.length-1; i >= 0; i--) {
      arr.push(Number(str[i]));
    }
    return arr
  }