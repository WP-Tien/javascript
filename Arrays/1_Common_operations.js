//// Tạo một mảng
 
var fruits = ["Apple", "Bananas"];

console.log(fruits.length);

// To access (index into) an Array item
var first = fruits[0];
console.log(first);

var last = fruits[fruits.length - 1];
console.log(last);
console.log(fruits.pop());

//// Or loop over an Array
var secondFruits = ['No', 'Girl', 'In', 'My', 'Life', 'To', 'Be', 'Better']
secondFruits.forEach(function(item, index, arr) {
    console.log(item, index);
    // console.log(arr);
});

// Add to the end of an Array
var newLength = secondFruits.push('!');
console.log(newLength);
console.log(secondFruits);

//// To remove from the end of an Array
var thirdFruits = [ '1', '2', '3', '4', '5' ];
var last = thirdFruits.pop();

console.log(last);
console.log(thirdFruits); // [ '1', '2', '3', '4' ]

// To remove from the front of an Array
var first = thirdFruits.shift();

console.log(first);
console.log(thirdFruits); // [ '2', '3', '4' ]

// Trái ngược với shift là unshift
var unShift = thirdFruits.unshift('new 1');

console.log( thirdFruits ); // [ 'new 1', '2', '3', '4' ]

// Thêm vào mảng
thirdFruits.push("New 5");

console.log(thirdFruits); // [ 'new 1', '2', '3', '4', 'New 5' ]

// Or Wanna Find the index of an item in the Array
var pos = thirdFruits.indexOf('New 5');
console.log(pos); // ko có thì trả về -1, If has return to position of that value

// Remove items from an index position
var fourthFruits = [ 'a', 'b', 'c', 'd' ];
var removedItem = fourthFruits.splice( '3', 1 ); // Start number, delete count

console.log(removedItem);
console.log(fourthFruits);
