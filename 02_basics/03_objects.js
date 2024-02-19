const mySym = Symbol("key1")

const JsUser = {
    name: "aniket",
    "full name": "Aniket Dey",
    [mySym]: "myKey1",
    age: 22,
    location: "kolkata",
    email: "meaniketdey@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "sun"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser[mySym]);


// console.log(JsUser);

// JsUser.name = "Chiku"
// console.log(JsUser);

// Object.freeze(JsUser)

// JsUser.name = "Lucifer"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello user");
}

JsUser.greetingTwo = function () {
    console.log(`hello user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());