"use strict";
const $button = document.querySelector('button');
$button ? console.log('existe') : console.error('null');
$button?.click();
const jogo = {
    nome: "LOL",
};
const livro = {};
console.log(jogo.nome?.toLocaleLowerCase());
console.log(livro.nome);
