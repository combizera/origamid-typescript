"use strict";
function preencherDados(dados) {
    document.body.innerHTML = `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'sim' : 'nao'}</p>
    </div>
  `;
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: false,
};
preencherDados({
    nome: "Computador",
    preco: 2000,
    teclado: true,
});
function pintarCategoria(categoria) {
    if (categoria === 'design') {
        console.log('pintar de azul');
    }
}
pintarCategoria('design');
