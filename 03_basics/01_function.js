function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("T");
}

// sayMyName()

function addTwoNum(num1, num2) {
    let result = num1 + num2
    return result
}

// const result = addTwoNum(5,5)
// console.log("Result: ", result);

function loginUserMessage(uname) {
    if(!uname){
        console.log("Please enter a Username");
        return
    }
    return `${uname} Just Logged in`
}

// console.log(loginUserMessage("a"));

function cart(...num1) {
    return num1
}

// console.log(cart(50,90,55));

const user = {
    username: "aniket",
    price: 199
}

function handleObje(anyobject) {
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObje(user)

// handleObje({
//     username: "chiku",
//     price: 399
// })

const arr = [200, 400, 900]
function returnVals(anyarray) {
    return anyarray[2]
}

// console.log(returnVals(arr));