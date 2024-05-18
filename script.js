"use strict";
// function abortar(mensagem: string):never {
//   throw new Error(mensagem);
// }
// abortar('um erro ocorreu');
// console.log('tente novamente')
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(" DesenVolvimento"));
console.log(normalizar([" DesenVolvimento", " deSing"]));
function $(seletor) {
    return document.querySelector(seletor);
}
console.log($('a'));
console.log($('.btn'));
console.log(typeof $('a'));
