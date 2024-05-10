// const temp = 55
// if (temp<70){
//     console.log("it is high");
// }

const userLoggedIn = true;
const HaveMoney = true;
const loggedInGoogle = false;
const loggedInLinkedin = true;

if (userLoggedIn && HaveMoney) {
    console.log("can Shop");
}

if(loggedInGoogle || loggedInLinkedin){
    console.log("Can logIn");
}