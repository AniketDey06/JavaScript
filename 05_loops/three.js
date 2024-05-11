const arr =["1bfd", "2bdf", "3th", "4ee", "5f"]

for (const num of arr) {
    // console.log(num);
}

let msg = "hello world"
for (const i of msg) {
    if (i==" ") {
        continue;
    }
    // console.log(`char is - ${i}`);
}

// Maps 

const map = new Map();

map.set('sam', "samsung")
map.set('vi', "vivo")
map.set('op', "oppo")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-',value);
}

const myObj = {
    'game1' : "NFS",
    'game2' : 'sp'
}

// for (const [key, value] of myobj) {
//     console.log(key,':-',value);
// }

