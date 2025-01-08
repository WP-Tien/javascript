// The reduce() method applies a function against an accumulator (một bộ tích luỹ) and each value of the array( form left-to-right ) to reduce it to a single value
// Array SUM
console.log( [1,2,3,4].reduce((a, b) => {
    return a + b;
})); // 10



// Optional second parameter can be passed to reduce(). Its value will be used as the first argument

console.log( [2].reduce( (a, b) => {
    return a + b;
}, 1)); // 3



// Flaten Array to Object
// The example below shows how to flatten an array of objects into a single object
var arr = [
    {
        key: 'one',
        value: 1
    },
    {
        key: 'two',
        value: 2
    },
    {
        key: 'three',
        value: 3
    }
]

console.log(
    arr.reduce( ( obj, current ) => {
        obj[current.key] = current.value;
        return obj;
    }, {}) // arr [] or object {}
);



// Map Using Reduce
function map(list, fn) {
    return list.reduce( function(newList, item){
        return newList.concat(fn(item));
    }, [] );
}

// Usage: 
// map([1,2,3], function(n) { return n * n; });
// -> [1, 4, 9]
console.log( map([1,2,3], function(n) { return n * n; }) );


// Find Min or Max value
var arr = [4, 2, 1, -10, 9];

console.log ( arr.reduce( function( a, b ) {
    return a < b ? a : b;
}) );


// Find Unique values
var arr = [1, 2, 1, 5, 9, 5];
arr.reduce((prev, number) => {
    console.log( prev,number );
    if(prev.indexOf(number) === -1) {
        
        prev.push(number);
    }
    return prev;
}, []);
// → [1, 2, 5, 9]

// console.log( arr.filter() );
