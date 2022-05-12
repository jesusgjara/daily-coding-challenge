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