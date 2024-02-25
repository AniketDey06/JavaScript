const user = {
    username: "aniket",
    price: 333,
    wellcomemsg: function () {
        console.log(`${this.username} ,Wellcome to the website.`);
    }
}

// user.wellcomemsg()
// user.username = "sam"
// user.wellcomemsg()
// console.log(this);

// function one() {
//     let name = "chiku"
//     console.log(this.name);
// }

// one()

// const one = function () {
//     let name = "chiku"
//     console.log(this.name);
    
// }

// const one = () => {
//     let name = "chiku"
//     console.log(this.name);
// }

// one()

// const sum = (num1,num2) => {
//     return num1+num2
// }

// console.log(sum(8,4));

// const sum = (num1,num2) => num1+num2

// const sum = (num1,num2) => (num1+num2)

const sum = (num1,num2) => ({username: "chiku"})

console.log(sum(8,4));