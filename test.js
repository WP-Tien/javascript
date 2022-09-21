
obj = {};

arr     = [ 1,2,3,4,5];
arr2    = [300,400,500,600,700];

for( var i = 0; i < arr2.length; i ++ ){
    obj[ arr2[i] ] = { slide: arr[i] };
}


console.log( obj );