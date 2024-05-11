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
// Em resumo usa-se interface quando vamos definir um objeto e type quando vamos definir algo que não vamos declarar um nome neste objeto como no caso dea linha 30
