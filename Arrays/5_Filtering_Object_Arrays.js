// The filter() method accepts a test function, and returns a new array containing only the elements of the original array thay pass the test provided

var numbers = [ 5, 32, 43, 4 ];

var odd = numbers.filter( (n) => {
    return n % 2 !== 0;
});

console.log(odd);
// let odd = numbers.filter( n => n % 2 !== 0 );
// can be shortened to ( n => n % 2 )

// console.log( odd );

var people = [{
    id: 1,
    name: "John",
    age: 28
}, {
    id: 2,
    name: "Jane",
    age: 31
}, {
    id: 3,
    name: "Peter",
    age: 55
}];

// var young = people.filter(function(person) {
//     return person.age < 35;
// })

// console.log( young );



// You can search in the whole array for a value like this:
var young = people.filter((obj) => {
var flag = false;

Object.values(obj).forEach((val) => {
    if(String(val).indexOf("J") > -1) {
        flag = true;
        return;
        }
    });
    if(flag) return obj;
});

console.log( young );