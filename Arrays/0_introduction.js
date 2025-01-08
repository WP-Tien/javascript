// Javascript Array lớp là một đối tượng toàn cục được sử dụng để khởi tạo một mảng; một danh sách giống như đối tượng "Arrays like objects" là biểu diễn đối tượng của Mảng với thuộc tính chiều dài, xem ví dụ:

// Look at on Browser
var realArray = ['a', 'b', 'c'];
var arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}

console.log(realArray);
console.log(arrayLike);

// Khởi tạo một Array
var star = new Array();
star[0] = 'Polaris';
star[1] = 'Deneb';
star[2] = 'Vega';
star[3] = 'Altair';
console.log(star);

// Một cách khởi tạo tường minh hơn:
var secondStar = ["Polaris", "Deneb", "Vega", "Altair"];
console.log(secondStar);

// More conplexity, Mảng với các giá trị lồng vào
var thirdStar = [
    ["Polaris", "Ursa Minor"],
    ["Deneb", "Cygnus"],
    {"name": "Vincent", "age": "28"},
    "status"
];

console.log(thirdStar);
