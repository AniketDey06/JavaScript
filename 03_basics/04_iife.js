//Immediately Invoked Function Expression
// named iife
(function one() {
    console.log(`DB connect`);
})();

// unnamed iife
((name) => {
    console.log(`DB connect 2 ${name}`);
})("chiku");


