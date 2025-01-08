var fs = require('fs');

function readFilePromise(path) {
    return new Promise( function(resolve, reject) {
        fs.readFile( path, {encoding: 'utf8'}, function(err, data){
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// readFilePromise('./files/song.txt')
// .then( function( song ) {
//     console.log( song );

//     return readFilePromise('./files/song1.txt');
// })
// .then( function( song1 ) {
//     console.log( song1 );

//     return readFilePromise('./files/song2.txt');
// })
// .then( function( song2 ) {
//     console.log( song2 );
// });

Promise.all([
    readFilePromise('./files/song.txt'),
    readFilePromise('./files/song1.txt'),
    readFilePromise('./files/song2.txt')
]).then(function(values) {
    console.log(values);
}).catch(function(err) {
    console.log(err);
});