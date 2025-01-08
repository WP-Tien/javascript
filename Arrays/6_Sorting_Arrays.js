var sort = ['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort();

console.log(sort);

// Alphabetical Sort
var alSort = ['s', 't', 'a', 'c', 'K', 'o', 'v', 'E', 'r', 'f', 'l', 'W', '2', '1'].sort((a, b) => {
    return a.localeCompare(b); // so sánh 2 chuỗi
});
console.log(alSort);

// Version 2 Alphabetical Sort
var alSortError = ['s', 't', 'a', 'c', 'K', 1, 'v', 'E', 'r', 'f', 'l', 'o', 'W'].sort((a, b) => {
    return a.toString().localeCompare(b);
});
console.log( alSortError );


// String sorting by length (longest first/ shortest first)
var lengthSort = ["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
    return b.length - a.length;
});
console.log( lengthSort );

// Numerical Short (ascending)
console.log(
    [100, 1000, 10, 10000, 1].sort(function(a, b) {
        return a - b;
    })
);