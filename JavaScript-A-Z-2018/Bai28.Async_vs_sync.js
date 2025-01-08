   var fs = require('fs');

    // console.log('Start');
    // var song = fs.readFileSync( 'files/song.txt', { encoding: 'utf8' } );
    // console.log( song );
    // var bark = fs.readFileSync( 'files/bark.txt', { encoding: 'utf8' } );
    // console.log( bark );
    // console.log('End');
   
   // Make Coffee -> 5 mins
    // Wearing clothes
    // Making bed

    // Sync 
    // |-------------------------|---------------------|----------------|--------------------->
    // Make Coffee             Coffee Done            Wearing done     done  
    //                         Wearing Clothes          making bed

    // Async
    // |-------------------------|--------------------|-----------------|--------------------->
    // Make Coffee             Weaing Clothes        Making bed        done

    console.log('Start');
    fs.readFile( 'files/song.txt', { encoding: 'utf8' }, function(err, song) {
        console.log( song );
    });
    console.log('End');