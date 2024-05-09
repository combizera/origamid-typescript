"use strict";
let total = 200;
total = "4000";
function isNumber(value) {
    if (typeof value === 'number') {
        console.log('É um número');
        return true;
    }
    else {
        console.log('Não é um número');
    }
}
console.log(isNumber(200));
