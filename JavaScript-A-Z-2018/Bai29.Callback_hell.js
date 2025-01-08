var fs = require('fs');

fs.readFile( './files/song.txt', { encoding: 'utf8'}, function(err, song) {
    console.log(song);
    fs.readFile( './files/song1.txt', { encoding: 'utf8'}, function(err, song1) {
        console.log(song1);
        fs.readFile( './files/song2.txt', { encoding: 'utf8'}, function(err, song2) {
            console.log(song2);
        });
    });
});

// Promise
// Giong Nested if or for