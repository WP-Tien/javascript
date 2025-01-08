// It is often necessary to generate a new array based on the values of an existing array

console.log(
    ['one', 'two', 'three', 'four'].map( ( value, index, arr ) => {
        return value.length;
    })
);

//   Additionally, map() provides an optional second parameter in order to set the value of this in the mapping function. Depending on the execution environment, the default value of this might vary: In a browser, the default value of this is always window:

console.log(
    ['one', 'two'].map(( value, index, arr ) => {
        console.log(this);
        return value.length;
    })
);


//   You can change it to any custom object like this:
['one', 'two'].map(function (value, index, arr) {
    console.log(this) // Object { document: "randomObject" }
    return value.length;
}, {
    documentation: 'randomObject'
});