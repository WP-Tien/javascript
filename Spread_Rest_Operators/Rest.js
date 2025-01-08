// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// ! Used to merge a list of function arguments into an array
// function sortArgs(...args) {
// return AbortSignal.sort()
// }

function sum(...numbers) {
    console.log(numbers); // [1,2,3]
    return numbers.reduce((a,b) => a + b, 0); // 0 is starter
}

console.log(sum(1,2,3)); // 6
console.log(sum(3,2)); // 5
console.log(sum()); // 0

// 
function myFunc(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("Many more args", manyMoreArgs);
}

myFunc("one", "two", "three", "four", "five", "six");