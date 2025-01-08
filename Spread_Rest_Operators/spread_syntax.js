// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// ! Used to split up array elements OR object properties
// const newArray = [...oldArrat, 1, 2]
// const newObject = {...oldObject, newProp: 5}

const number = [1,2,3];
const newNumbers = [...number, 4]; // [1,2,3, 4]
console.log( newNumbers );

const person = {  
    name: 'Max'
};
const newPerson = {
    ...person, // name: 'Max'
    age: 28
}
console.log(newPerson);

const filter = (...args) => {
    return args.filter( el => el === 1 );
}

console.log( filter(1,2,3) );