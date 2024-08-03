"use strict";
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json();
}
async function handleProduto() {
    const produto = await fetchProduto();
    produto.nome;
}
handleProduto();
const video = document.querySelector('video');
video.volume;
