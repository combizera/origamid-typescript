const $button = document.querySelector('button');

$button ? console.log('existe') : console.error('null');

$button?.click();

interface Product {
  nome?: string,
}

const jogo: Product = {
  nome: "LOL",
}

const livro: Product = {
}

console.log(jogo.nome?.toLocaleLowerCase());
console.log(livro.nome);