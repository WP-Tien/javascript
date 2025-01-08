// Promise
// var fs = require('promise-fs');

// function onDone(song) {
//     console.log(song);
// }

// function onError(error) {
//     console.log(error);
// }

// function readFile(path) {
//     return fs.readFile( path, { encoding: 'utf8' } );
// }

// readFile('./files/song.txt')
//     .then( onDone )
//     . then ( function() {
//         return readFile( './files/song1.txt' );
//     })
//     .then( onDone )
//     .catch( onError );

// Làm theo cách trên không dùng module promise

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

readFilePromise('./files/song.txt')
.then( function( song ) {
    console.log( song );
})
.catch( function( err ) {
    console.log( err );
})