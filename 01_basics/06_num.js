// const score = 100
// console.log(score);

// const balance = new Number(6969.6969)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const num2 = 4593.66588
// console.log(num2.toPrecision(4));
// console.log(num2.toPrecision(5));
// console.log(num2.toPrecision(6));
// precision value can not be less then the whole number 
// then it will give exponent values
// console.log(num2.toPrecision(3));

const hundreds = 100000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-In'));


// -------------------Math-------------------

// console.log(Math);
// console.log(Math.abs(-999));
// console.log(Math.round(89.49));
// console.log(Math.round(89.499999999999999));
// console.log(Math.ceil(89.643));
// console.log(Math.floor(89.999));
// console.log(Math.min(4,9,5,8,3,1));
// console.log(Math.max(4,9,5,8,3,1));


// ------Random------

// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log((Math.random()*100)+1);

const min = 10
const max = 90

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
