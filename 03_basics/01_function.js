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

console.log(loginUserMessage("a"));