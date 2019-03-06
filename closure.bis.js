'use strict'

function multiplicador (x){

    console.log(x);

    return function (y){
        console.log(y);
        return x*y;
    }
}


// dos maneras de hacer lo mismo? No simplemente la var x = por5;
const por5 = multiplicador(5);
console.log(por5(7));

const x= multiplicador(5);
console.log(x(6));