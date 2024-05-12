const code = ["js", "c", "c++", "python"]

code.forEach(function(val){
    // console.log(val);
})

code.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

// code.forEach(printMe)

code.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

const mycode = [
    {
        lang : "js",
        file : ".js"
    },
    {
        lang: "python",
        file: ".py"
    },
    {
        lang: "java",
        file: ".java"
    }
]

mycode.forEach((item)=>{
    console.log(item.lang);
})