// const myArr = [ 1,3,8]
// const myArr2 = [ 15,350,8500]

// myArr.push(myArr2);

// console.log(myArr);
// console.log(myArr[3][1]);

// const myNewArr = myArr.concat(myArr2)
// console.log(myNewArr);

// const myNewArr = [...myArr, ...myArr2, 2]
// console.log(myNewArr);

const myArr = [ 1,3,[4,5],6,[7,[8,9]]]
console.log(myArr.flat(Infinity));