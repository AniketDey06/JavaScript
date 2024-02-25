let a = 100

if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("in the if",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const name = "aniket";

    function two() {
        const website = "portfolio";
        console.log(name);
    }

    console.log(website);
    two()
}

// one()

if (true){
    const username = "Aniket"
    if (username == "Aniket") {
        const website = " portfolio"
        // console.log(username + website); 
    } 
}


console.log(addOne(5));
function addOne(num) {
    return num + 1
}


// console.log(addTwo(5)); not allowed !!
const addTwo = function(num) {
    return num + 2
}
