const myObj={
    js : 'javaScript',
    cpp : 'c++',
    rb : 'rubby'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const prog = ["js", "c", "c++", "python"]

for (const key in prog) {
    // console.log(prog[key]);
}

const map = new Map();

map.set('sam', "samsung")
map.set('vi', "vivo")
map.set('op', "oppo")

for (const key in map) {
    console.log(key);
}

