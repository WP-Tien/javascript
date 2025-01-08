// Lấy tất cả
function logger( ...params ) {
    console.log( params );
}
logger(1,2,3,4);

// Case 2 lấy 2 3 4
function logger2( a, ...params ) { // a, b ...params
    console.log( params );
}
logger2(1,2,3,4,);

// Sử dụng destructuring
function desObj( { name, price } ) {
    console.log( name );
    console.log( price );
}   

desObj({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
});

// 
function desArr( [ a, b, ...rest ] ) {
    console.log( a );
    console.log( b );
    console.log( rest );
}

desArr([
    2,
    6,
    7,
    8,
    9
]);


// Spread thay cho concat
