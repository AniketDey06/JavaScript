const mynum = [1,2,3,4,5,6,7]

const mytotal = mynum.reduce(function(acc, currval){
    // console.log(`acc: ${acc} and curval ${currval}`);
    return acc+currval
},10)

const mytot = mynum.reduce((acc, curr) => acc+curr,10)
// console.log(mytot);

const shoppingCart=[
    {
        item: "js c",
        price: 2999
    },
    {
        item: "dsa c",
        price: 4999
    },
    {
        item: "java c",
        price: 3999
    },
    {
        item: "mobile c",
        price: 3999
    }
]

const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);