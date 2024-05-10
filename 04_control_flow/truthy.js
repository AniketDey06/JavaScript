const userEmail = []

if (userEmail) {
    console.log("Got Email");
}else{
    console.log("no Email");
}

// truty value 

// "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("empty");
// }

// const obj = {}
// if(Object.keys(obj).length === 0){
//     console.log("obj is Empty");
// }

// ?? => Nullish Coalescing Oparetor 
// it is use to handle null, undeffined variables

let val1
// val1 = 50 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 18 ?? 80
console.log(val1);

// terniary
const a = 55

a>=40 ? console.log("more then 40"): console.log("less then 40");
