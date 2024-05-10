

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(index);
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop:${i} ${j}`);
//     }
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     if(i===5){
//         break
//     }
// }

for (let i = 0; i <= 10; i++) {
    if(i===5){
        console.log(`in if ${i}`);
        continue
    }
    console.log(i);
}

