// 1. Array.from
const arrayLike = {
    0: 'Value 0',
    1: 'Value 1',
    length: 2
};

// arrayLike.forEach( value => { // Errors
//     // Do stuff 
// } );

const realArray = Array.from(arrayLike);
    realArray.forEach( (value, index) => { // Works
        console.log( value, index );
});



// 2. for..of
var realArr = []
// for (let element of arrayLike) {
//     realArray.append(element);
// }

console.log( arrayLike['1'] ); // Converts the arrayLikesObj to array
// tham khảo thêm tại: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable
for ( let element of Object.keys(arrayLike) ) {
    var value = arrayLike[element];
    realArr.push(value);
}
console.log(realArr);



// 3. Object.values:
const secondArrLike = {
    0: 'Value 0',
    1: 'Value 1',
    length: 2
}

var realArray2 = Object.values( secondArrLike );
console.log(realArray2);




// 4. Use Array.prototype.slice like so:
const thirdArrLike = {
    0: 'Value 0',
    1: 'Value 1',
    length: 2
}

var realArray3 = Array.prototype.slice.call(thirdArrLike);
// realArray3 = [].slice.call(arrayLike); 

console.log ( realArray3.indexOf('Value 1') ); // Wow! this works