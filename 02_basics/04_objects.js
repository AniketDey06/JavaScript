const fbUser = {}

fbUser.id = "123abc"
fbUser.name = "aniket"
fbUser.isLogin = false

// console.log(fbUser);
 
const tUser = {
    email: "asdf@gmail.com",
    fullname: {
        uFullName: {
            fName: "Aniket",
            lName: "Dey"
        }
    }
}

// console.log(tUser.fullname.uFullName.fName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "asdfg@gg"
    },
    {

    }, 
    {

    }
]

// console.log(users[0].email);
console.log(fbUser);
console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));
console.log(Object.entries(fbUser));

console.log(fbUser.hasOwnProperty('name'));
console.log(fbUser.hasOwnProperty('isLogin'));